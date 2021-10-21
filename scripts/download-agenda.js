require('dotenv').config()
let fetch = require('node-fetch')
let fs = require('fs')
let app = process.env.AIRTABLE_AGENDA_APP
let key = process.env.AIRTABLE_APP_KEY
let table = process.env.AIRTABLE_AGENDA_TABLE
let view = process.env.AIRTABLE_AGENDA_VIEW
let baseUrl = `https://api.airtable.com/v0/${ app }`

async function fetchAgenda() {
    let json = await fetch(`${ baseUrl }/${ table }?view=${ view }`, { headers: {'Authorization': `Bearer ${ key }`}})
    let results = await json.json()
    return results.records.map((r) => ( { what: r.fields.ID, when: r.fields["Start Time (GMT)"] } ))
}

async function init() {
    // get speakers from Airtable
    let items = await fetchAgenda()
    console.log(`Writing ${ items.length } agenda items to data/staging/agenda.json`)
    // write these bits to JSON
    let output = {
        agenda: items
    }
    fs.writeFileSync('./data/staging/agenda.json', JSON.stringify(output))
}

init()