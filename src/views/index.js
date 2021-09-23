let Layout = require('./layout')
//let getChangelogData = require('../shared/get-changelog-data')
let getDirectoryData = require('../shared/get-directory-data')
let SpeakersContainer = require('./components/speakers')
let OrganizersContainer = require('./components/organizers')

let Template = function ({ speakersContainer, organizersContainer, directoryContainer }) {
    let content = /*html*/`
    <div id="landing">
        <section id="hero" class="landing">
            <h1>CascadiaJS is the Pacific Northwest JavaScript Conference</h1>
            <div id="hero-copy">   
                <div>
                    <p>Join us on Nov 3 &amp; 4 for a <em>hybrid</em> event, a virtual conference <em>progressively enhanced</em> with in-person events in Seattle, Portland and Vancouver, BC.</p>
                </div>
                <div>
                    <img src="/images/heron-right.png" alt="hero image of a hybrid heron / espresso machine"/>
                </div>
            </div>
        </section>
        <section id="hybrid" class="landing">
            <div id="hybrid-container">
                <div class="hybrid-event">
                    <p><img src="/images/conf/hybrid-seattle-mopop.jpg" alt="MoPOP"/></p>
                    <h2>Seattle, WA</h2>
                    <p>MoPOP</p>
                    <div class="cta secondary"><a href="/conf/seattle">Seattle Tickets and Info</a></div>
                </div>
                <div class="hybrid-event">
                    <p><img src="/images/conf/hybrid-portland-omsi.jpg" alt="OMSI"/></p>
                    <h2>Portland, OR</h2>
                    <p>OMSI</p>
                    <div class="cta secondary"><a href="/conf/portland">Portland Tickets and Info</a></div>
                </div>
                <div class="hybrid-event">
                    <p><img src="/images/conf/hybrid-vancouver-ubc.jpg" alt="UBC Robson Square"/></p>
                    <h2>Vancouver, BC</h2>
                    <p>UBC Robson Square</p>
                    <div class="cta secondary"><a href="/conf/vancouver">Vancouver Tickets and Info</a></div>
                </div>
            </div>
        </section>
        <section id="highlights" class="landing">
            <div>
                <p><img src="/images/hackday/cascadiajs-cup-med.png"/></p>
                <div class="cta secondary"><a href="/hackday">Pre-Conf Hack Day (Nov 1)</a></div>
            </div>
            <div>
                <p><img src="/images/cjs20-family.jpg"/></p>
                <div class="cta secondary"><a href="/tickets">Conference (Nov 3 &amp; 4)</a></div>
            </div>
            <div>
                <p><img src="/images/workshops/instructors-wide.jpg"/></p>
                <div class="cta secondary"><a href="/workshops">Post-Conf Workshops (Nov 8 - 12)</a></div>
            </div>
        </section>
        <section id="speakers" class="landing">
            <h1>Speakers</h1>
            ${ speakersContainer }
        </section>
        <section id="organizers" class="landing">
            <h1>Organizers</h1>
            ${ organizersContainer }
        </section>
        <section id="directory" class="landing">
            <h1>Conference Directory</h1>
            ${ directoryContainer }
            <div style="margin-top:32px"><i>Learn more about <a href="/directory">how we built this Conference Directory</a> and then <a href="/home/dashboard">get yourself added</a>!</i></div>
        </section>
    </div>
    `
    return content
}

let DirectoryContainer = function ({ directory }) {
    return /*html*/`
        <div id="attendee-list">
            ${ directory.map(t => /*html*/`
                <a target="_github" href="https://github.com/${ t.github }"><img src="${ t.avatar }" alt="avatar image for ${ t.fullName }" /></a>
                `).join("")}
        </div>`
}

module.exports = async function IndexView ({ speakers }) {
    //let changelog = getChangelogData()
    // only pass the most recent 3 posts
    //changelog = changelog.slice(0, 3)
    let directory = await getDirectoryData()
    let speakersContainer = SpeakersContainer({ speakers })
    let organizersContainer = OrganizersContainer()
    let directoryContainer = DirectoryContainer({ directory })
    let content = Template({ speakersContainer, organizersContainer, directoryContainer })
    let html = Layout({ content, title: 'Home' })
    return { html }
}
