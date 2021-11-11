let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')
let SponsorsContainer = require('../components/sponsors')

module.exports = function Layout ({title, content, socialUrl, excerpt, scripts = []}) {
  return /*html*/`
  <!doctype html>
  <!-- this conference is built by devs for devs -->
  <html lang=en>
    ${ head({ title, content, socialUrl, excerpt })}
    <body>
      <div id="root">
        <header>
          <section class="alert">
            Join us for <a href="https://2022.cascadiajs.com">CascadiaJS 2022</a>, our 10-year anniversary event, at Sunriver Resort in Bend, OR!
          </section>
          <nav>
            <div class="wide">
              <div id="logo"><a href="/"><img src="/images/logo-green.svg" alt="logo"/></a></div>
              <div><span><a href="/">CascadiaJS 2021</a></span></div>
              <div class="push"><a href="/covid-19">COVID-19</a></div>
              <div class="spacer"><a href="/schedule">Schedule</a></div>
              <div class="spacer"><a href="/workshops">Workshops</a></div>
              <div class="spacer"><a href="/sponsors/jobs">Jobs</a></div>
              <div class="spacer"><a href="https://www.youtube.com/cascadiajs" class="buy">Watch the Talks</a></div>
            </div>
          </nav>
        </header>
        <main id="content">
          ${ content }
          <section id="sponsors" class="landing">
            <h1>Our Sponsors</h1>
            ${ SponsorsContainer() }
            <div class="cta"><a href="/sponsors">Sponsor Our Event</a></div>
          </section>
        </main>
        ${ footer() }
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}
