let exists = require('fs').existsSync
let join = require('path').join
let manifest = require('./static.json')

// return true if the markdown file exists, false otherwise
function pageExists(path) {
  let page = path.substr(1)
  let md = join(process.cwd(), 'node_modules', '@architect', 'views', 'content', `${ page }.md`)
  let html = join(process.cwd(), 'node_modules', '@architect', 'views', 'content', `${ page }.html`)
  return exists(md) || exists(html)
}

// return truthy if the asset requested is in our static manifest JSON, falsy otherwise
function staticExists(path) {
  let asset = path.substr(1)
  return manifest[asset]
}


module.exports = {
    pageExists,
    staticExists
}