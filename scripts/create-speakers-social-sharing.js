/* eslint-disable global-require */
const join = require("path").join
const fs = require('fs')
//const sandbox = require("@architect/sandbox")
const puppeteer = require("puppeteer")
const baseUrl = "http://localhost:3333"

// NOTE: make sure the PUPPETEER_SKIP_DOWNLOAD envvar is set to TRUE wherever you deploy this code

async function createImages() {
  // get env
  let env = process.argv[2]

  // start the sandbox webserver
  //await sandbox.start()

  // define data directory
  const data = join(__dirname, "..", "data", env)

  // get list of speakers
  const speakers = JSON.parse(fs.readFileSync(join(data, "speakers.json")).toString())

  // set-up headless browser
  let browser
  let height = 628
  let width = 1200
  let deviceScaleFactor = 1

  console.log("Loading globally installed localdev puppeteer")

  browser = await puppeteer.launch({
    defaultViewport: {
      height,
      width,
      deviceScaleFactor,
    },
  })

  let page = await browser.newPage()

  for (const speaker of speakers) {
    let url = `${ baseUrl }/speakers/${ speaker.key }?social`
    console.log(`Generating a screen shot for ${ url }`)
    await page.goto(url)
    await page.screenshot({ path: `${ data }/${ speaker.key }-social.png` })
  }

  console.log("Shutting down")
  // shut down the browser
  await browser.close()
  // shut down the sandbox
  //await sandbox.end()
}

createImages()
