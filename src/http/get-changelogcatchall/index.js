// eslint-disable-next-line no-global-assign
let exists = require('fs').existsSync
let join = require('path').join
let arc = require('@architect/functions')
let IndexView = require('@architect/views/changelog')
let PageView = require('@architect/views/pages')
let NotFoundView = require('@architect/views/404')
let getChangelog = require('@architect/shared/changelog')

// return true if the markdown file exists, false otherwise
function pageExists(path) {
  let page = path.substr(1)
  let md = join(process.cwd(), 'node_modules', '@architect', 'views', 'content', `${ page }.md`)
  return exists(md)
}

/**
 * This router passes the request to the appropriate view or static asset
 */
async function Router (req) {
  // root (/) request, return Index view
  if (req.path === '/changelog' || req.path === '/changelog/') {
      let items = getChangelog()
      return await IndexView(items)
  }
  // the path matches a markdown file in our filesystem
  else if (pageExists(req.path)) {
    return await PageView(req)
  }
  // else return 404
  else return
}

exports.handler = arc.http.async(Router, NotFoundView)
