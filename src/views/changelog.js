let Layout = require('./layout')

module.exports = function changelogIndex (list) {
    let content = /*html*/`
    <div id="page">
      <div class="page-title">
          <div class="wide"><h1>Changelog</h1></div>
      </div>
      <div class="page-body wide">
      <ul>
      ${ list.map(item => `
        <li><a href="/changelog/${ item.stub }">${ (new Date(item.published)).toLocaleDateString("en-US") } - ${ item.title }</a></li>
        `).join('') }
      </ul>
      </div>
    </div>`
    let html = Layout({ content })
    return {
      html,
      status: 404
    }
  }