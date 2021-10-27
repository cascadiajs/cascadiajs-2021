const fetch = require('node-fetch')
const fs = require('fs')

async function uploadLinks(env, password) {
    // set-up the API URL
    let url
    if (env === 'testing') {
        url = 'http://localhost:3333'
    }
    else  {
        url = `https://${ env === 'staging' ? 'staging.' : '' }2021.cascadiajs.com`
    }

    // read the proper file
    let linksData = JSON.parse(fs.readFileSync(`./data/${ env }/links.json`).toString())

    // log-in
    const params = new URLSearchParams()
    params.append('password', password)
    let login = await fetch(`${url}/login`, {method: 'POST', body: params, redirect: 'manual'})

    // get the session cookie
    let cookie = login.headers.get('set-cookie')

    // upload the links
    linksData.forEach(async l => {
        await fetch(`${url}/links/${ l.key }`, {
            method: 'POST',
            headers: {cookie, 'Content-Type': 'application/json'},
            body:    JSON.stringify(l),
        })
    })
}

function main() {
    let env = process.argv[2]
    let password = process.argv[3]
    uploadLinks(env, password)
}

main()