let arc = require('@architect/functions')
let data = require('@begin/data')
let getSpeakerData = require('@architect/shared/get-speaker-data')
let LiveView = require('@architect/views/live')
let ExpoView = require('@architect/views/live/expo')
let JobsView = require('@architect/views/live/jobs')
let NotFoundView = require('@architect/views/404')
let PageView = require('@architect/views/pages')
let { pageExists } = require('@architect/shared/static-pages')

// check for session
async function unauthenticated(req) {
  if (req.session.ticketRef) return
  else {
    let location = "/home?needAuth=true"
    return { location }
  }
}

// display live stream page
async function authenticated(req) {
  let ticket = await data.get({ table: 'tickets', key: req.session.ticketRef })
  if (ticket && ticket.conference === 'Y') {
    let speakerData = getSpeakerData(req)
    let speakers = speakerData.speakers
    let { view } = req.params
    let links = await data.get( {table: 'links', limit: 100 })
    if (view === 'live') {
      return LiveView({ speakers, ticket, links })
    }
    else if (view === 'expo') {
      return ExpoView({ links })
    }
    else if (view === 'jobs') {
      return JobsView({ links })
    }
    else {
      return
    }
  }
  else {
    let location = "/home?noTicket=true"
    return { location }
  }
}

// display static page
async function page(req) {
  if (pageExists(req.path)) {
    return await PageView(req)
  }
  else {
    return
  }
}

exports.handler = arc.http.async(page, unauthenticated, authenticated, NotFoundView)