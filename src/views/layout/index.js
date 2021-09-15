let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

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
            Deadline to Register and get a Hoodie + Goodie Box is Sept 17th
          </section>
          <nav>
            <div class="wide">
              <div id="logo"><a href="/"><img src="/images/logo-green.svg" alt="logo"/></a></div>
              <div><span><a href="/">CascadiaJS 2021</a></span></div>
              <div class="push"><a href="/covid-19">COVID-19</a></div>
              <div class="spacer"><a href="/hackday">Hack Day</a></div>
              <div class="spacer"><a href="/conf">Conference</a></div>
              <div class="spacer"><a href="/workshops">Workshops</a></div>
              <div class="spacer"><a href="/tickets" class="buy">Tickets</a></div>
            </div>
          </nav>
        </header>
        <main id="content">
          ${ content }
          <section id="sponsors" class="landing">
            <h1>Our Sponsors</h1>
            <div class="sponsor-grid">
                <div><a href="https://circleci.com"><img src="/images/sponsors/circleci.svg" alt=""/></a></div>
                <div><a href="https://saucelabs.com"><img src="/images/sponsors/saucelabs.png" alt=""/></a></div>
                <div><a href="https://twilio.com"><img src="/images/sponsors/twilio.svg" alt=""/></a></div>
                <div><a href="https://auth0.com"><img src="/images/sponsors/auth0.svg" alt=""/></a></div>
            </div>
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
