let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title = 'CascadiaJS 2021 - Live Stream', content, socialUrl }) {
  let scripts = ['/js/live.js', 'https://cascadiajs-emote-server.herokuapp.com/emote.js']
  return /*html*/`
  <!doctype html>
  <html lang=en>
    ${ head({ title, content, socialUrl })}
    <body>
      <div id="root">
        <header id="live-header">
          <div id="logo">
            <a href="/"><img src="/images/logo-green.svg" alt="CascadiaJS logo"/></a>
          </div>
          <div id="settings">
            <div id="handbook-link">
              <span class="cta"><a href="/conf/handbook" target="_handbook">Handbook</a></span>
            </div>
            <div id="settings-label-slackview" class="label">Discord View</div>
            <div id="settings-switch-slackview">
              <label class="switch">
                <input id="slack-view-button" type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div class="label">Captions</div>
            <div>
              <label class="switch">
                <input id="stream-text-button" type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div class="label">Clapping Audio</div>
            <div>
              <label class="switch">
                <input id="clapping-audio-button" type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>
        </header>
        <main id="content">
          ${ content }
        </main>
        ${ footer() }
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}
