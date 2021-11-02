let Layout = require('../layout')

module.exports = async function Index({ ticket, links }) {
    let clientID = process.env.GITHUB_CLIENT_ID
    //let battlesnake = links.find(l => l.key === 'battlesnake')
    let dapps = links.find(l => l.key === 'dapps')
    let dolbyio = links.find(l => l.key === 'dolbyio')
    let hasura = links.find(l => l.key === 'hasura')
    let discord = links.find(l => l.key === 'discord')
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id="home" class="page-body narrow">
                <h2>Ticket Info</h2>
                <table>
                    <tr><th>Ticket Type</th><th>Conference Access?</th><th>Goodie Box?</th>${ ticket.late_hoodie === 'Y' ? /*html*/`<th>In-Person Hoodie?</th>` : ``}
                    <tr><td>${ ticket.ticket }</td><td>${ ticket.conference == 'Y' ? "Yes" : "No" }</td><td>${ ticket.hoodie === 'Y' ? "Yes" : "No" }</td>
                    ${ ticket.late_hoodie === 'Y' ? /*html*/`<td>Yes</td>` : ``}
                    </tr>
                </table>
                ${ ticket.conference === 'Y'
                ? /*html*/`
                    <h2>Onboarding</h2>
                    <p>If this is your first time logging in, please review our <a href="/conf/onboarding">Onboarding Guide</a>.</p>
                    <h2>Talk Track</h2>
                    <p>Stay Tuned, link coming soon. Livestream will begin on both days at 9am PDT.</p>
                    <h2>Workshop Track</h2>
                    <table id="workshop-rsvp">
                        <tr><td>Nov 3 @ 10am PDT</td><td><a href="/workshops/courier">Courier Workshop</a></td><td><div class="cta secondary"><a target="_blank" href="https://youtu.be/ZrwkVXOsKe8">Register</a></div></td></tr>
                        ${ dapps ? `<tr><td>Nov 3 @ 2pm PDT</td><td><a href="/workshops/dapps">${ dapps.label }</a></td><td><div class="cta secondary"><a target="_blank" href="${ dapps.url }">Register</a></div></td></tr>` : '' }
                        ${ dolbyio ? `<tr><td>Nov 4 @ 10am PDT</td><td><a href="/workshops/dolbyio">${ dolbyio.label }</a></td><td><div class="cta secondary"><a target="_blank" href="${ dolbyio.url }">Register</a></div></td></tr>` : '' }
                        ${ hasura ? `<tr><td>Nov 4 @ 2pm PDT</td><td><a href="/workshops/hasura">${ hasura.label }</a></td><td><div class="cta secondary"><a target="_blank" href="${ hasura.url }">Register</a></div></td></tr>` : '' }
                    </table>
                    <h2>Hallway Track</h2>
                    <h3>Gather</h3>
                    <p>Stay Tuned, link coming soon. Virtual doors will open on Nov 3 at 8am PDT.</p>
                    <h3>Discord</h3>
                    <div class="cta secondary"><a target="_discord" href="${ discord?.url }">Join Discord</a></div>
                    <h3>Photo Booth</h3>
                    <p>Hop into the CascadiaJS Photo Booth! Record yourself saying "hello", download the animated gif, and share it in the Discord and on Twitter!</p>
                    <div class="cta secondary"><a target="_booth" href="https://cascadiajs-photo-app.herokuapp.com/home">Photo Booth</a></div>
                    <h3>Conference Directory</h3>
                    ${ ticket.github && ticket.github !== ''
                        ? `<p>You have been added to the Conference Directory ✅<p>
                        <p>We have also generated a <a href="/tickets/${ ticket.number }" target="_blank">virtual ticket</a> that you can share on social media. Anyone who registers via your virtual ticket page gets 10% off!</p>`
                        : `<p>Let folks know you're attending CascadiaJS this year! We use <a target="_blank" href="https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps">Github OAuth</a> to retrieve your profile photo and add it to our Conference Directory. We will also generate a customized virtual ticket for you to share on social media!</p>
                        <div class="cta secondary"><a href="https://github.com/login/oauth/authorize?client_id=${clientID}">Get Added to Directory</a></div>`
                    }`
                : ``}
                <h2>Need Help?</h2>
                <p>Check-out the <a target="_handbook" href="/conf/handbook">Handbook</a> for answers to common questions.</p>
                <p>Please contact us in the <a target="_discord" href="${ discord?.url }">Discord</a> at #help-questions.</p>
                <h2>Reset Session</h2>
                <p>If you need to use a different Ticket Reference, just reset the session and start over.
                <form action=/home method=post>
                    <input type=hidden name=reset value=reset/>
                    <button>Reset Session</button>
                </form>
            </div>
        </div>
    `
    let html = Layout({ content })
    return { html }
}
