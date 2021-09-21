let arc = require('@architect/functions')
let ScheduleView = require('@architect/views/schedule')
const getSpeakerData = require('@architect/shared/get-speaker-data')

/**
 * Display the full schedule
 */

async function Schedule (req) {
  let { speakers, selectedTopics, topics } = await getSpeakerData(req)
  return await ScheduleView({ speakers, selectedTopics, topics })
}

exports.handler = arc.http.async(Schedule)
