let arc = require('@architect/functions')
let sponsors = require('@architect/shared/data/sponsors.json')
let SponsorView = require('@architect/views/sponsor')
let NotFoundView = require('@architect/views/404')

async function Organizer(req) {
  const { key } = req.params
  const { social } = req.queryStringParameters
  const sponsor = sponsors.find(s => s.key === key)
  if (sponsor) {
    return await SponsorView({sponsor, social})
  }
}

exports.handler = arc.http.async(Organizer, NotFoundView)