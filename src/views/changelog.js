let Layout = require('./layout')

module.exports = function changelogIndex (list) {
    // Return 404
    let content = `<section>
      <ul>
        ${ list.map(item => `<li><a href="/changelog/${ item.stub }">${ item.title }</a></li>`)}
      </ul>
    </section>`
    let html = Layout({ content })
    return {
      html,
      status: 404
    }
  }