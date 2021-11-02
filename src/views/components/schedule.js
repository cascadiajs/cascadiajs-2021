function renderSpeaker(time, speaker = {}) {
    return /*html*/`
    <div class="show-item">                
        <div class="when">${ time }</div>
        <div class="what">
            <div class="title"><a href="/speakers/${ speaker.key }">${ speaker.title }</a> ${ speaker.track === 'lightning' ? '⚡️' : '' }</div>
            <div class="speaker">${ speaker.name }</div>
        </div>
    </div>`
}

function hallwayTrack({ticket = undefined, links = []}) {
    console.log(links)
    let discord = links.find(l => l.key === 'discord')
    let gather = links.find(l => l.key === 'gather')
    return /*html*/`
    <div class="hallway track">
    <h3>Hallway Track</h3>
    <p></p>
    <div class="show-item">       
        <div class="what">
            <div class="title">Find Your Friends</div>
            <br/>
            <p>We're setting-up affinity tables and channels across our Hallway Track platforms so that you can easily find folks to hang out with!</p>
            <p>
                <span class="boaf">Seattle, WA</span>
                <span class="boaf">Portland, OR</span>
                <span class="boaf">Vancouver, BC</span>
            </p>
            <p>
                <span class="boaf">Node.js</span>
                <span class="boaf">React.js</span>
                <span class="boaf">Vue.js</span>
                <span class="boaf">Angular.js</span>
            </p>
            <p>
                <span class="boaf">TypeScript</span>
                <span class="boaf">JAM Stack</span>
                <span class="boaf">Web Components</span>
                <span class="boaf">CSS</span>
            </p>
        </div>
    </div>
    <div class="show-item">       
        <div class="what">
            <div class="title">Connect with Experts</div><br/>
            <p>Connect with experts at some of the top developer tooling companies in our industry.</p>
            <div class="hallway-sponsors">
                <div class="sponsor"><img src="/images/sponsors/circleci.svg" alt="Circle CI logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/courier.png" alt="Courier logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/media-jams.svg" alt="Media Jams logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/new-relic.svg" alt="New Relic logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/hasura.png" alt="Hasura logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/tmobile.png" alt="T-Mobile logo"/></div>
                <div class="sponsor"><img src="/images/sponsors/dolby.svg" alt="Dolby.io logo"/></div>
            </div>
        </div>
    </div>
    <div class="show-item">
        <div class="what">
            <div class="title">Join the Hallway Track</div><br/>
            <p>You have two options for joining the Hallway Track: Gather and Discord</p>
            <p>Gather is a virtual space that you can walk around and explore. When you bump into people, you'll have the option of seeings and hearing them via a video chat. We'll have lots of fun stuff to do inside the Gather, including watching the live stream!</p>
            <p><img src="/images/gather-map.jpg" alt="source: https://www.reddit.com/r/gathertown/comments/no8i1a/our_new_office/"/></p>
            ${ ticket && ticket.conference === 'Y' && gather
                ? `<p><span class="cta"><a href="${ gather.url }" target="_gather">Join Gather</a></span></p>`
                : ``}
            <p>If you'd prefer a more text and meme-centric way to hang out during the conference, we will be running a private Discord server. The Discord server will have channels for everything, including talking about #react and connecting with #workshop instructors.</p>
            ${ ticket && ticket.conference === 'Y' && discord
            ? `<p><span class="cta"><a href="${ discord.url }" target="_discord">Join Discord</a></span></p>`
            : ``}
        </div>
    </div>
</div>

    `
}

function DayZero({ ticket = undefined }) {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Pre-Conf<br/>Nov 1 
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3><a href="/hackday">BattleSnake Hack Day</a></h3>
                <div class="show-item">       
                    <div class="when">9:30</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Doors Open</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title">Battlesnake Workshop</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">11:00</div>
                    <div class="what"><div class="title">Hacking</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">19:00</div>
                    <div class="what"><div class="title">Battlesnake Tournament Begins!</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">20:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Doors Close</div></div>
                </div>
            </div>
        </div>
    </div>
`
}

function DayOne({ speakers = [], ticket = undefined, links }) {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Day One<br/>November 3
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3>Live Stream Track</h3>
                <div class="show-item">       
                    <div class="when">09:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Conference Opens</div></div>
                </div>
                ${ renderSpeaker("", speakers.find(s => s.key === 'james-steinbach'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'jessica-campos'))}
                <div class="show-item">       
                    <div class="when">10:15</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("10:45", speakers.find(s => s.key === 'leonardo-faria'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'andrew-hao'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'aaron-turner'))}
                <div class="show-item">       
                    <div class="when">12:00</div>
                    <div class="what"><div class="title"><i class="fas fa-taco"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("13:40", speakers.find(s => s.key === 'ceora-ford'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'michelle-bakels'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'romello-goodman'))}
                <div class="show-item">       
                    <div class="when">15:00</div>
                    <div class="what"><div class="title"><i class="fas fa-popcorn"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:40", speakers.find(s => s.key === 'josh-goldberg'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'kyle-shevlin'))}
                <div class="show-item">       
                    <div class="when">16:50</div>
                    <div class="what"><div class="title">Day One Wrap</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:00</div>
                    <div class="what"><div class="title"><i class="fas fa-question-circle"></i> <a href="/conf/opening-party">JavaScript Trivia Night</a></div></div>
                </div>
                <div class="show-item">       
                    <div class="when">18:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Day One Close</div></div>
                </div>
            </div>

            ${ hallwayTrack({ ticket, links })}

            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what">
                        <div class="title"><a href="/workshops/courier">Ghostifications Workshop</a></div>
                        <div class="speaker">
                            <div class="sponsor"><img src="/images/sponsors/courier.png" alt="Courier logo"/></div>
                            <p>Early stage startups can require building complex notification systems into their product to improve communication with users and increase user engagement, which can be a time consuming and expensive process.</p>
                            <p>This workshop demonstrates how you can use the Courier API to start sending notifications in seconds, across all channels. Learn how you can get started with sending 10,000 messages per month with the Free Tier.</p>
                        </div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="when">14:00</div>
                    <div class="what">
                        <div class="title"><a href="/workshops/dapps">Making a User Interface for DApps Workshop</a></div>
                        <div class="speaker">
                            <div class="sponsor"><img src="/images/sponsors/media-jams.svg" alt="MediaJams logo"/></div>
                            <p>As much of a buzz term as blockchain has become, it's still a great technology. To take some of the magic out of it, blockchain is essentially a distributed database. A blockchain is made of blocks that contain data and those blocks are chained together across multiple machines, which make up the distributed network.</p>
                            <p>In this workshop, we'll build a distributed app in the Redwood framework that handles video data. We'll make a smart contract to handle our blockchain interactions. Then we'll set up the Redwood distributed app that will work with the blockchain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
}

function DayTwo({ speakers = [], ticket = undefined, links }) {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Day Two<br/>Nov 4
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3>Live Stream Track</h3>
                <div class="show-item">       
                    <div class="when">09:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Conference Opens</div></div>
                </div>
                ${ renderSpeaker("", speakers.find(s => s.key === 'charlie-gerard'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'lizzie-siegle'))}
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("10:45", speakers.find(s => s.key === 'brooklyn-zelenka'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'ian-sutherland'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'jacques-favreau'))}
                <div class="show-item">       
                    <div class="when">12:00</div>
                    <div class="what"><div class="title"><i class="fas fa-burger-soda"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("14:00", speakers.find(s => s.key === 'daria-caraway'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'derek-hurley'))}
                <div class="show-item">       
                    <div class="when">15:00</div>
                    <div class="what"><div class="title"><i class="fas fa-pie"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:45", speakers.find(s => s.key === 'garann-means'))}
                ${ renderSpeaker("", speakers.find(s => s.key === 'feross-aboukhadijeh'))}
                <div class="show-item">       
                    <div class="when">16:45</div>
                    <div class="what"><div class="title">Day Two Wrap</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:00</div>
                    <div class="what">
                        <div class="evening title">
                            <div><i class="fas fa-guitar-electric"></i> <a href="/conf/closing-party">Live Music Performance</a></div>
                        </div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="when">18:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Conference Close</div></div>
                </div>
            </div>

            ${ hallwayTrack({ ticket, links })}

            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what">
                        <div class="title"><a href="/workshops/dolbyio">Dolby.io Workshop</a></div>
                        <div class="speaker">
                            <div class="sponsor"><img src="/images/sponsors/dolby.svg" alt="Dolby.io logo"/></div>
                            <p>In this workshop we'll learn how to build a fun geospatial video conferencing app using Dolby.io's Communications APIs.  We'll explain the concepts behind Dolby Voice® audio processing which includes spatial audio, noise suppression, dynamic leveling, and more.  These advanced audio features are made available out-of-the-box to give high-quality and better end-user experiences.</p>
                        </div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="when">14:00</div>
                    <div class="what">
                        <div class="title"><a href="/workshops/hasura">Generated TypeScript Tooling with Hasura Workshop</a></div>
                        <div class="speaker">
                            <div class="sponsor"><img src="/images/sponsors/hasura.png" alt="Hasura logo"/></div>
                            <p>Imagine owning a sports car but never making it into top gear. That’s a little like using strongly typed GraphQL without a strongly typed front-end language. This workshop will give you the background you need to get the best of both worlds without the headache and second-guessing.</p>
                        </div>
                    </div>
                </div-->
            </div>
        </div>
    </div>
`
}

function WorkshopWeek() {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Post-Conf<br/>Nov 8
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><a href="/workshops/node-intro">Functional Programming in Node.js</a></div></div>
                </div>
                <div class="show-item">       
                    <div class="when">13:00</div>
                    <div class="what"><div class="title"><a href="/workshops/node-advanced">Asynchronous JavaScript with Node.js</a></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Nov 9
            </h2>
        </div>
        <div class="day-content">
            <div class="show track">
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><a href="/workshops/js-perf">Building Blazing-Fast Apps by using Chrome DevTools</a></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Nov 10
            </h2>
        </div>
        <div class="day-content">
            <div class="show track">
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><a href="/workshops/intro-a11y">Intro to Accessible Web Development with HTML, CSS, and JavaScript</a></div></div>
                </div>
                <div class="show-item">       
                    <div class="when">13:00</div>
                    <div class="what"><div class="title"><a href="/workshops/react-hooks">Zero to React with Hooks</a></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Nov 11
            </h2>
        </div>
        <div class="day-content">
            <div class="show track">
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><a href="/workshops/advanced-a11y">Advanced Accessibility with JavaScript and Automated Testing</a></div></div>
                </div>
                <div class="show-item">       
                    <div class="when">13:00</div>
                    <div class="what"><div class="title"><a href="/workshops/ts-react">TypeScript for React Developers</a></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Nov 12
            </h2>
        </div>
        <div class="day-content">
            <div class="show track">
                <div class="show-item">       
                    <div class="when">10:00</div>
                    <div class="what"><div class="title"><a href="/workshops/graphql-intro">Getting Started with GraphQL</a></div></div>
                </div>
                <div class="show-item">       
                    <div class="when">13:00</div>
                    <div class="what"><div class="title"><a href="/workshops/graphql-advanced">Scaling GraphQL APIs with Federation</a></div></div>
                </div>
            </div>
        </div>
    </div>
`
}


function ConfSchedule ({ speakers, ticket = undefined }) {
    return /*html*/`
    <div id="conf-schedule">
        ${ DayZero({ ticket }) }
        ${ DayOne({ speakers, ticket }) }
        ${ DayTwo({ speakers, ticket }) }
        ${ WorkshopWeek() }
    </div>`
}

module.exports = {
    ConfSchedule,
    DayZero,
    DayOne,
    DayTwo
}
