let arc = require('@architect/functions')
const data = require('@begin/data')
const HomeView = require('@architect/views/home')
const FormView = require('@architect/views/home/login')
const HoodiesView = require('@architect/views/home/hoodies')

// render the form
async function unauthenticated(req) {
  if (req.session.ticketRef) return
  else {
    let message
    if (req.query.notfound !== undefined) {
      message = 'We could not find that Ticket Reference. Please email info@cascadiajs.com for assistance'
    }
    return FormView({ message })
  }
}

// display the ticket information
async function authenticated(req) {
  const ticket = await data.get({ table: 'tickets', key: req.session.ticketRef })
  if (!ticket) {
    let message = 'We could not find that Ticket Reference. Please reach out in #help-questions in our Slack.'
    return FormView({ message })
  }
  else if (req.query.hoodies !== undefined) {
    return HoodiesView({ ticket })
  }
  else {
    return HomeView({ ticket })
  }
}

exports.handler = arc.http.async(unauthenticated, authenticated)