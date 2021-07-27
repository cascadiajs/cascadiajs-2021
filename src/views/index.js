let Layout = require('./layout')

module.exports = function IndexView () {
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
        <section id="sponsors" class="landing">
            <h1>Our Past Sponsors</h1>
            <div class="wide">
                <img src="/images/cjs-past-sponsors.png" alt="past sponsors of CascadiaJS"/>
                <div class="cta"><a href="/sponsors">Sponsor Our Event</a></div>
            </div>
        </section>
        <section id="cfp" class="landing">
            <h1>Call for Presenters is OPEN</h1>
            <div class="wide">
                <p>Right now, we have an <a href="/cfp">open CFP</a> that runs to <span class="strike">July 19, 2021</span> August 2, 2021.</p>
                <p>Every developer has a story, and we want to hear yours!</p>
                <div class="cta"><a href="/cfp">Learn More</a></div>
            </div>
        </section>
    </div>
    `
    let html = Layout({ content, title: 'Home' })
    return { html }
  }