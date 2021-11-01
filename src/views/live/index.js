let LiveLayout = require('../layout/live')
let { DayOne, DayTwo } = require('../components/schedule')

module.exports = async function Live({ ticket, links }) {
    let isDayOne = (new Date() - new Date('2021-11-03T21:00:00.0Z') < 0)
    let dayContainer = (isDayOne ? DayOne({ ticket, links }) : DayTwo({ ticket, links }))
    let ytId = (isDayOne ? 'vFhJceJffwE' : 'ePDqanmVm1Y')
    let content = /*html*/`
    <div id="live" class="slack-view-true">
        <section id="left-pane">
            <div id="graphic-recording">
                <h2>Talk Illustrations</h2>
                <div class="video-container">
                    <iframe
                        src="https://player.twitch.tv/?channel=cascadiajs&parent=localhost&parent=2021.cascadiajs.com"
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
                <q-and-a
                    id="qa"
                    user-id="${ ticket.key }"
                    correlation-id="cjs21-test"
                    use-firebase="true"
                    firebase-db="https://cjs21-discord-mirror-default-rtdb.firebaseio.com"
                    firebase-token="AIzaSyBq4Yb9zA3_I-qzqYMqoq6F9hDfvzhRRRI"
                    firebase-project-id="cjs21-discord-mirror"
                    placeholder="true"
                >
                </q-and-a>
                </div>
            </div>
            <div id="emote">
                <emote-widget talk-id="cjs21-test" open="false"></emote-widget>
                <!--audio src="/sounds/applause-8.mp3"></audio-->
            </div>
        </section>
        <section id="stream"> 
            <div class="inner">            
                <div id="stream-video" class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/${ ytId }?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="stream-text" class="stream-text-true">
                <iframe id="stFrame" 
                src="//www.streamtext.net/player?event=IHaveADream&header=true&footer=false&scroll=false&chat=false" 
                style="width:100%;height:95%" frameborder="0"></iframe>
                </div>
            </div>
        </section>
        <section id="chat" class="slack-view-true">
            <h2>Discord View</h2>
            <div id="chat-discordview">
                <discord-mirror id="discord-mirror" url="https://cjs21-discord-mirror-default-rtdb.firebaseio.com/" use-styles="false"></discord-mirror>
            </div>
            <div class="chat-about">Discord mirroring powered by <a target="_blank" href="https://ab.bot">Ab.bot</a></div>
        </section>
    </div>
    <div id="live-more">
        <div id="conf-schedule">
            ${ dayContainer }
        </div>
    </div>
    `
    let html = LiveLayout({ content, view: 'live' })
    return { html }
}


