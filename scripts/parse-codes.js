const fs = require('fs')
const parse = require('csv-parse/lib/sync')


let env = process.argv[2]

let codesData = fs.readFileSync(`./data/${ env }/codes.csv`).toString()

const records = parse(codesData, {
    columns: true,
    skip_empty_lines: true
  })

const subset = records.map((r) => {
    return {
        key: r['Code'],
        ticketRef: r['Ticket Reference']
    }
})

fs.writeFileSync(`./data/${ env }/codes.json`, JSON.stringify(subset))