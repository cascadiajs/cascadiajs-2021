const AWS = require('aws-sdk')
const chromium = require('chrome-aws-lambda')
const baseUrl = require('@architect/shared/base-url')()

module.exports = async function screencap({ ticket }) {
    let { number } = ticket
    let browser
    // set-up headless browser
    //let height = 628
    //let width = 1200
    //let deviceScaleFactor = 1
    try {
      browser = await chromium.puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      })

      let page = await browser.newPage()
      await page.goto(`${ baseUrl }/tickets/${ number }`)
      const file = await page.screenshot()
      await browser.close()
      const s3 = new AWS.S3()
      let fileName = `ticket-${ number }.png`
      await s3
        .putObject({
          Bucket: process.env.ARC_S3_BUCKET,
          Key : fileName,
          ContentType: 'image/png',
          Body: file,
          ACL: 'public-read',
        })
        .promise()

      return `https://s3-us-west-2.amazonaws.com/${ process.env.ARC_S3_BUCKET }/${ fileName }`
    } catch (error) {
      throw new Error(error)
    } finally {
      if (browser !== null) {
        await browser.close()
      }
    }
  }