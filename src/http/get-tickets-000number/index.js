let arc = require('@architect/functions')
const data = require('@begin/data')
const TicketView = require('@architect/views/ticket')
const NotFoundView = require('@architect/views/404')

// display the ticket information
async function Ticket(req) {
  const { number } = req.params
  let ticketData = await data.get( {table: 'tickets', limit: 1000 })
  let ticket
  for (let i in ticketData) {
    let record = ticketData[i]
    if (record.number === parseInt(number) && record.github) {
      ticket = record
    }
  }
  console.log(ticket)
  if (ticket) {
    return TicketView({ ticket })
  }
  else {
    return NotFoundView()
  }
}

exports.handler = arc.http.async(Ticket)