const fs = require('fs')
const parse = require('csv-parse/lib/sync')


let env = process.argv[2]

let ticketsData = fs.readFileSync(`./data/${ env }/tickets.csv`).toString()

const records = parse(ticketsData, {
    columns: true,
    skip_empty_lines: true
  })

const orders = Array.from(new Set(records.map(r => r['Ticket Reference'].split('-')[0])))

const subset = records.map((r, i) => {
    return {
        number: orders.indexOf(r['Ticket Reference'].split('-')[0]),
        ticket: r['Ticket'],
        fullName: r['Ticket Full Name'],
        key: r['Ticket Reference'],
        conference: r['Conference - Day One'],
        hoodie: r['Hoodie'],
        code: r['Redemption Code']
    }
})

fs.writeFileSync(`./data/${ env }/tickets.json`, JSON.stringify(subset))