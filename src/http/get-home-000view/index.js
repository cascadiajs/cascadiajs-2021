let arc = require('@architect/functions')
const data = require('@begin/data')
const HomeView = require('@architect/views/home')
const LoginView = require('@architect/views/home/login')
const HoodiesView = require('@architect/views/home/hoodies')
const NotFoundView = require('@architect/views/404')
const github = require('./github')

// render the form
async function unauthenticated(req) {
  if (req.session.ticketRef) return
  else {
    let message
    if (req.query.notfound !== undefined) {
      message = 'We could not find that Ticket Reference. Please email info@cascadiajs.com for assistance'
    }
    return LoginView({ message })
  }
}

// display the ticket information
async function authenticated(req) {
  const { view } = req.params
  const ticket = await data.get({ table: 'tickets', key: req.session.ticketRef })

  if (!ticket) {
    let message = 'We could not find that Ticket Reference. Please reach out in #help-questions in our Slack.'
    return LoginView({ message })
  }
  else if (view === 'dashboard') {
    return HomeView({ ticket })
  }
  else if (view === 'hoodies') {
    return HoodiesView({ ticket })
  }
  else if (view === 'oauth') {
    let info = await github(req)
    console.log(info)
    await data.set({ table: 'tickets', ...ticket, github: info.login, avatar: info.avatar })
    //let ticketImageUrl = await screenshot({ ticket })
    //console.log(ticketImageUrl)
    return {
      location: '/home/dashboard'
    }
  }
  else {
    return NotFoundView()
  }
}

exports.handler = arc.http.async(unauthenticated, authenticated)