let arc = require('@architect/functions')
//let data = require('@begin/data')
let screenshot = require('./screenshot')
let AWS = require('aws-sdk')

// take a screenshot of the ticket page and store in s3
async function buildTicket(req) {
  let number = req.body.number
  try {
    let file = await screenshot({ number })
    console.log(file)
    const s3 = new AWS.S3()
    let fileName = `ticket-${ number }.png`
    let s3result = await s3
      .putObject({
        Bucket: process.env.ARC_STATIC_BUCKET,
        Key : process.env.ARC_STATIC_PREFIX + '/' + fileName,
        ContentType: 'image/png',
        Body: file,
        ACL: 'public-read',
      })
      .promise()

    console.log(s3result)
    return { json: { ticketImageUrl: s3result.Location } }
  }
  catch (error) {
    console.log(error)
    return { statusCode: 500, body: JSON.stringify({ error }) }
  }
}

exports.handler = arc.http.async(buildTicket)