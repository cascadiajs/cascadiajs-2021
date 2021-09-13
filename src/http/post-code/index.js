let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, upsert)

/** ensure session */
async function auth(req) {
  if (!req.session.loggedIn)
    return { location: '/' }
}

/** write to begin/data */
async function upsert(req) {
  let code = {
    key: req.body.key,
  }
  if (req.body.ticketRef && req.body.ticketRef !== '') {
    code.ticketRef = req.body.ticketRef
  }
  //console.log(req.body)
  await data.set({
    table: 'codes',
    ...code
  })

  return { location: '/admin' }
}
