/* eslint-disable global-require */
const join = require("path").join
const fs = require('fs')
const sandbox = require("@architect/sandbox")
const puppeteer = require("puppeteer")
const url = "http://localhost:3333"

// NOTE: make sure the PUPPETEER_SKIP_DOWNLOAD envvar is set to TRUE wherever you deploy this code

// NOTE: will not create directories!!!

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(join(dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

async function createImages() {
  // if provided, should be the relative path to a single file to render a social sharing image for
  let input = process.argv[2]
  // start the sandbox webserver
  await sandbox.start()

  // define which pages (URLs) we are going to generate social sharing images for
  const source = join(__dirname, "..", "src", "views", "content")

  // define destination for social sharing images
  const dest = join(__dirname, "..", "public", "images", "social")

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

  let files = []
  if (input) {
    files.push(join(__dirname, '..', input))
  }
  else {
    files = getAllFiles(source)
  }

  let numCreated = 0

  for (const file of files) {
    console.log(file)
    let relativePath = file.split(source).pop().split('.md')[0]
    if (!fs.existsSync(`${dest}/${ relativePath }-share.png`)) {
      console.log(`Generating a screen shot for ${ relativePath }`)
      await page.goto(`${ url }/${ relativePath }?social`)
      await page.screenshot({ path: `${dest}/${ relativePath }-share.png` })
      numCreated++
    }
    else {
      console.log(`${dest}/${ relativePath }-share.png already exists`)
    }
  }

  console.log("Shutting down")
  // shut down te browser
  await browser.close()
  // shut down the sandbox
  await sandbox.end()
  // return 0 if no images created, 1 otherwise. This will block a `git push` and allow us to add the images before pushing
  process.exit(numCreated === 0 ? 0 : 1)
}

createImages()
