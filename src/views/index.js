let Layout = require('./layout')

module.exports = function IndexView ({ changelog }) {
    let content = /*html*/`
    <div id="landing">
        <section id="hero">
            <div style="height:100%;display:flex;flex-direction:column">
                <div id="hero-copy" class="landing" style="flex: 1">
                    <h1>CascadiaJS is the Pacific Northwest JavaScript Conference</h1>    
                    <p>This year's event will be a <em>hybrid</em> event, a virtual conference <em>progressively enhanced</em> with in-person events in Seattle, Portland and Vancouver, BC</p>
                    <div class="cta"><a href="/tickets">More Info</a></div>
                </div>
                <div id="waves">
                    <img src="/images/heron-left.png" alt="hero image of a hybrid heron / espresso machine"/>
                </div>
            </div>
            <div style="display:flex;flex-direction:column">
                <div style="flex:1"></div>
                <div><img src="/images/heron-right.png" alt="hero image of a hybrid heron / espresso machine"/></div>
            </div>
        </section>
        <section id="changelog" class="landing">
            <h1>Changelog</h1>
            <div id="changelog-posts">
            ${ changelog.map(post => `
                <div class="changelog-post">
                    <h2>${ post.title }</h2>
                    <p style="flex:1">${ post.excerpt }</p>
                    <div>
                        <div class="cta"><a href="/changelog/${ post.stub }">Read More</a></div>
                    </div>
                </div>
            `).join('')}
            </div>
        </section>
        <section id="sponsors" class="landing">
            <h1>Our Past Sponsors</h1>
            <div class="wide">
                <img src="/images/cjs-past-sponsors.png" alt="past sponsors of CascadiaJS"/>
                <div class="cta"><a href="/sponsors">Sponsor Our Event</a></div>
            </div>
        </section>
    </div>
    `
    let html = Layout({ content, title: 'Home' })
    return { html }
  }