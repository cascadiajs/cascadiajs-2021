let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, upsert_or_delete)

/** ensure session */
async function auth(req) {
  if (!req.session.loggedIn)
    return { location: '/' }
}

/** write to begin/data */
async function upsert_or_delete(req) {
  if (req.body.__delete) {
    await data.destroy({table: 'tickets', key: req.body.key })
  }
  else {
    let ticket = req.body
    // sanitize input for the DB
    ticket.number = (ticket.number && ticket.number !== '' ? parseInt(ticket.number) : undefined)
    ticket.github = (ticket.github && ticket.github !== '' ? ticket.github : undefined)
    ticket.avatar = (ticket.avatar && ticket.avatar !== '' ? ticket.avatar : undefined)
    console.log(ticket)
    await data.set({
      table: 'tickets',
      ...ticket
    })
  }

  return { location: '/admin' }
}
