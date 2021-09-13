let arc = require('@architect/functions')
let screenshot = require('./screenshot')
let AWS = require('aws-sdk')

async function ticketShared (event) {
  console.log(JSON.stringify(event, null, 2))
  let number = event.number
  try {
    let file = await screenshot({ number })
    console.log(file)
    const s3 = new AWS.S3()
    let fileName = `ticket-${ number }.png`
    await s3
      .putObject({
        Bucket: process.env.ARC_STATIC_BUCKET,
        Key : process.env.ARC_STATIC_PREFIX + '/' + fileName,
        ContentType: 'image/png',
        Body: file,
        ACL: 'public-read',
      })
      .promise()

  }
  catch (error) {
    console.log(error)
  }

  return
}

exports.handler = arc.events.subscribe(ticketShared)