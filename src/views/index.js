let Layout = require('./layout')
let SpeakersContainer = require('./components/speakers')
let OrganizersContainer = require('./components/organizers')

 let Template = function ({ speakersContainer, changelog, organizersContainer }) {
    let content = /*html*/`
    <div id="landing">
        <section id="hero" class="landing">
            <h1>CascadiaJS is the Pacific Northwest JavaScript Conference</h1>
            <div id="hero-copy">   
                <div>
                    <p>This year's event will be a <em>hybrid</em> event, a virtual conference <em>progressively enhanced</em> with in-person events in Seattle, Portland and Vancouver, BC</p>
                    <div class="cta"><a href="/tickets">More Info</a></div>
                </div>
                <div>
                    <img src="/images/heron-right.png" alt="hero image of a hybrid heron / espresso machine"/>
                </div>
            </div>
        </section>
        <section id="changelog" class="landing">
            <h1>Changelog</h1>
            <div id="changelog-posts">
            ${ changelog.map(post => `
                <div class="changelog-card">
                    <p class="changelog-card-date">${ (new Date(post.published)).toDateString() }</p>
                    <p class="changelog-card-title"><a href="/changelog/${ post.stub }">${ post.title }</a></p>
                    <!--p style="flex:1">${ post.excerpt }</p>
                    <div>
                        <div class="cta secondary"><a href="/changelog/${ post.stub }">Read More</a></div>
                    </div-->
                </div>
            `).join('')}
            </div>
            <div class="wide">
                <div class="cta"><a href="/changelog">See Full Changelog</a></div>
            </div>
        </section>
        <section id="speakers" class="landing">
            <h1>Speakers</h2>
            ${ speakersContainer }
        </section>
        <section id="sponsors" class="landing">
            <h1>Our Past Sponsors</h1>
            <div class="wide">
                <img src="/images/cjs-past-sponsors.png" alt="past sponsors of CascadiaJS"/>
                <div class="cta"><a href="/sponsors">Sponsor Our Event</a></div>
            </div>
        </section>
        <section id="organizers" class="landing">
            <h1>Organizers</h2>
            ${ organizersContainer }
        </section>
    </div>
    `
    return content
  }

  module.exports = function IndexView ({ changelog, speakers }) {
    let speakersContainer = SpeakersContainer({ speakers })
    let organizersContainer = OrganizersContainer()
    let content = Template({ changelog, speakersContainer, organizersContainer })
    let html = Layout({ content, title: 'Home' })
    return { html }
  }