// eslint-disable-next-line no-global-assign
let arc = require('@architect/functions')
let IndexView = require('@architect/views/changelog')
let getChangelogData = require('@architect/shared/get-changelog-data')

/**
 * This router passes the request to the appropriate view or static asset
 */
async function Router () {
  // root (/) request, return Index view
  let items = getChangelogData()
  return await IndexView(items)
}

exports.handler = arc.http.async(Router)