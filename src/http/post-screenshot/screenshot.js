
const chromium = require('chrome-aws-lambda')
require('puppeteer-core')
const baseUrl = require('@architect/shared/utils/base-url')()

module.exports = async function screencap({ number }) {
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
      return file
    } catch (error) {
        console.log(error)
    } finally {
      if (browser) {
        await browser.close()
      }
    }
  }