let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title = 'CascadiaJS 2021 - Live Stream', content, socialUrl, view }) {
  let scripts = view === 'live'
    ? ['/js/live.js', '/js/emote.js', 'https://unpkg.com/@cascadiajs/discord-mirror/dist/discord-mirror/discord-mirror.esm.js', 'https://unpkg.com/@cascadiajs/q-and-a/dist/q-and-a/q-and-a.esm.js']
    : []
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
          <div id="live-nav">
            <div><a class="${ view === 'live' ? 'selected': ''}" href="/conf/live">Live</a></div>
            <div><a class="${ view === 'expo' ? 'selected': ''}" href="/conf/expo">Expo</a></div>
            <div><a class="${ view === 'jobs' ? 'selected': ''}" href="/conf/jobs">Jobs</a></span></div>
            <div><a href="/conf/handbook" target="_handbook">Handbook</a></div>
          </div>
          ${ view === 'live' ? /*html*/`
          <div id="settings">
            <div id="settings-label-discordview" class="label">Discord View</div>
            <div id="settings-switch-discordview">
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
            <div id="settings-label-clapping" class="label">Clapping Audio</div>
            <div id="settings-switch-clapping">
              <label class="switch">
                <input id="clapping-audio-button" type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>
          `
          : ''}

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
