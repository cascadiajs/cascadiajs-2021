require('dotenv').config()
let fetch = require('node-fetch')
let fs = require('fs')
let slugify = require('slugify')

let appId = process.env.AIRTABLE_APP_ID
let appKey = process.env.AIRTABLE_APP_KEY
let speakerViewId = process.env.AIRTABLE_SPEAKER_VIEW
let baseUrl = `https://api.airtable.com/v0/${ appId }`

async function fetchTopics() {
    let fields = ['Name']
    let json = await fetch(`${ baseUrl }/Topics?view=Grid%20view${ fields.map((f) => '&fields%5B%5D='+encodeURIComponent(f)).join('') }`, { headers: {'Authorization': `Bearer ${ appKey }`}})
    let results = await json.json()
    return results.records.map((r) => ( { id: r.id, name: r.fields.Name } ))
}

async function fetchSpeakers({ topics }) {
    let fields = ['Name', 'Location', 'Talk Title', 'Abstract', 'Reveal', 'Pixelated', 'Topic(s)', 'Pronouns', 'Twitter', 'Website', 'Company']
    let json = await fetch(`${ baseUrl }/Speakers?view=${ speakerViewId }${ fields.map((f) => '&fields%5B%5D='+encodeURIComponent(f)).join('') }`, { headers: {'Authorization': `Bearer ${ appKey }`}})
    let results = await json.json()
    let members = results.records.map((r) => { return {
        table: 'speakers',
        key: slugify(r.fields['Name'], { lower: true }),
        name: r.fields['Name'],
        location: r.fields['Location'],
        title: r.fields['Talk Title'],
        abstract: r.fields['Abstract'],
        reveal: r.fields['Reveal'],
        pixelated: r.fields['Pixelated'],
        topics: r.fields['Topic(s)']
            .map((id) => topics.find((t) => t.id === id)) // grab the skill objects that match the ids
            .map((t) => t.name), // grab the Name
        pronouns: r.fields['Pronouns'],
        twitter: r.fields['Twitter'],
        website: r.fields['Website'],
        company: r.fields['Company']
    } })
    return members
}

async function init() {
    // get speakers from Airtable
    let topics = await fetchTopics()
    let speakers = await fetchSpeakers({ topics })
    console.log(`Writing ${ speakers.length } speakers to data/staging/speakers.json`)
    // write these bits to JSON
    fs.writeFileSync('./data/staging/speakers.json', JSON.stringify(speakers))
}

init()