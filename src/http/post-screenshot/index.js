let arc = require('@architect/functions')
//let data = require('@begin/data')
let screenshot = require('./screenshot')
let AWS = require('aws-sdk')

// take a screenshot of the ticket page and store in s3
async function buildTicket(req) {
  let number = req.body.number
  try {
    let file = screenshot({ number })
    console.log(file)
    const s3 = new AWS.S3()
    let fileName = `ticket-${ number }.png`
    let s3result = await s3
      .putObject({
        Bucket: process.env.ARC_STATIC_BUCKET,
        Key : fileName,
        ContentType: 'image/png',
        Body: file,
        ACL: 'public-read',
      })
      .promise()

    return { body: JSON.stringify({ ticketImageUrl: s3result.Location }) }
  }
  catch (error) {
    console.log(error)
    return { statusCode: 500, body: JSON.stringify({ error }) }
  }
}

exports.handler = arc.http.async(buildTicket)