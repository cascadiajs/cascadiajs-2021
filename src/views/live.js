let LiveLayout = require('./layout/live')
let { DayZero } = require('./components/schedule')

module.exports = async function Live({ speakers, ticket }) {
    let dayContainer = DayZero({ ticket })
    let content = /*html*/`
    <div id="live" class="slack-view-true">
        <section id="left-pane">
            <div id="graphic-recording">
                <h2>Talk Illustrations</h2>
                <div class="video-container">
                    <iframe
                        src="https://player.twitch.tv/?channel=cascadiajs&parent=localhost&parent=2020.cascadiajs.com"
                        height="100%"
                        width="100%"
                        frameborder="no"
                        scrolling="no"
                        allowfullscreen="allowfullscreen">
                    </iframe>
                </div>
            </div>
            <div id="q-and-a">
                <h2>Q&A</h2>
                <div id="q-a-container">
                    <pre>Q&A widget will go here.</pre>
                </div>
            </div>
            <div id="emote">
                <emote-widget talk-id="cjs20-test" position="bottom-left" open="false"></emote-widget>
            </div>
        </section>
        <section id="stream"> 
            <div class="inner">            
                <div id="stream-video" class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/YMJ3pAX_0_U?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="stream-text" class="stream-text-true">
                    <pre>Captions will go here</pre>
                </div>
            </div>
        </section>
        <section id="chat" class="slack-view-true">
            <h2>Discord View</h2>
            <div id="chat-slackview">
                <pre>Discord chat will go here</pre>
            </div>
        </section>
    </div>
    <div id="live-more">
        <div id="conf-schedule">
            ${ dayContainer }
        </div>
    </div>
    `
    let html = LiveLayout({ content })
    return { html }
}


