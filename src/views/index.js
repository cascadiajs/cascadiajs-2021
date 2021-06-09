let Layout = require('./layout')

module.exports = function IndexView () {
    let content = /*html*/`
    <div id="landing">
        <section id="preview" class="landing">
            <h2>CascadiaJS 2021 is going hybrid!</h2>
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
            <div class="narrow">
                <p>We are SO excited to be bringing CascadiaJS back this year, this time in a hybrid format. In addition to a virtual event that anyone around the world can attend from the comfort of their couch, we will host watch parties in Seattle, Portland and Vancouver (BC).</p>
                <p>The conference is going to take place <span class="highlight warning">Nov 3-4, 2021</span> so save the dates. As usual, we will load up tons of workshops and other fun activities during the course of that week.</p>
                <p>Right now, we have an <a href="/cfp">open CFP</a> that runs to <span class="highlight warning">July 19, 2021</span>. Every developer has a story, and we want to hear yours!</p>
            </div>
        </section>
    </div>
    `
    let html = Layout({ content, title: 'Home' })
    return { html }
  }