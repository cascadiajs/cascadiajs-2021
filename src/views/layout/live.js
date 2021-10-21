let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title = 'CascadiaJS 2021 - Live Stream', content, socialUrl }) {
  let scripts = ['/js/live.js', 'https://unpkg.com/@cascadiajs/discord-mirror/dist/discord-mirror/discord-mirror.esm.js']
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
      <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBHkheP0kQXmKORe7DG4X45hSHGXyp1qm4",
          authDomain: "cascadiajs-2021-schedule.firebaseapp.com",
          databaseURL: "https://cascadiajs-2021-schedule-default-rtdb.firebaseio.com",
          projectId: "cascadiajs-2021-schedule",
          storageBucket: "cascadiajs-2021-schedule.appspot.com",
          messagingSenderId: "580950881593",
          appId: "1:580950881593:web:3afd3f2fbd5ef6b71b64e8"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
      </script>
    </body>
  </html>
`
}
