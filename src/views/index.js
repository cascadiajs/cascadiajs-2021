let Layout = require('./layout')

module.exports = function IndexView () {
    let content = /*html*/`
    <div id="landing">
        <section id="preview" class="landing">
            <h1>CascadiaJS 2021 (Nov 3-4)</h1>
            <div id="preview-carousel">
                <div class="carousel">
                    <video aria-label="Video from https://twitter.com/Not_Woods/status/1301285874697551877?s=20" src="https://video.twimg.com/tweet_video/Eg8YmKXVoAAFETv.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Video from https://twitter.com/monteslu/status/1301183840648605703?s=20" src="https://video.twimg.com/tweet_video/Eg67xFHUMAAUkKl.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Video from https://twitter.com/BronwenEvans11/status/1301264949822464002?s=20" src="https://video.twimg.com/tweet_video/Eg8FBOhVoAAaN-d.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg8C0WjWkAE2MQr.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg7BZOEWkAEAYtJ.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg7AXB1VkAASsoj.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg8tbzOUYAApIiH.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg80-8TUYAArvpl.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg8xVQoVkAUIxiK.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                    <video aria-label="Embedded video" src="https://video.twimg.com/tweet_video/Eg8WNvnVkAA7ibv.mp4" type="video/mp4"  muted autoplay loop playsinline></video>
                </div>
            </div>
        </section>
        <section id="hybrid" class="landing">
            <h1>Progressively Enhanced for 2021</h1>
            <div class="narrow">
                <p style="width: 500px;margin: 0 auto;text-align:left;font-size:1.5em;">
                    <i class="fas fa-calendar"></i> Nov 3 - 4, 2021<br/>
                    <i class="fas fa-tv-retro"></i> Virtual Event for Everyone<br/>
                    <i class="fas fa-users-class"></i> Enhanced IRL Events in SEA/PDX/YVR
                </p>
                <div class="cta"><a href="/tickets">More Info</a></div>
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
            <div class="narrow">
                <p>Right now, we have an <a href="/cfp">open CFP</a> that runs to July 19, 2021.</p>
                <p>Every developer has a story, and we want to hear yours!</p>
                <div class="cta"><a href="/cfp">Learn More</a></div>
            </div>
        </section>
    </div>
    `
    let html = Layout({ content, title: 'Home' })
    return { html }
  }