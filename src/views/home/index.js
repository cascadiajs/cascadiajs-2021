let Layout = require('../layout')

module.exports = async function Index({ ticket, links }) {
    let clientID = process.env.GITHUB_CLIENT_ID
    let courier = links.find(l => l.key === 'courier')
    let battlesnake = links.find(l => l.key === 'battlesnake')
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
                    <h2>Pre-Conf Hack Day</h2>
                    <p>Start getting excited for the first ever <a href="/hackday">Battlesnake CascadiaJS Cup</a>! We are limiting entries to 64 players, so don't miss your chance to use your knowledge of HTTP and webhooks to win prizes and glory!</p>
                    <div class="cta secondary"><a href="${ battlesnake?.url }">Register for Hack Day</a></div>
                    <h2>Workshop Track</h2>
                    <table>
                        ${ courier ? `<tr><td>Nov 3 @ 10am PDT</td><td><a href="/workshops/courier">${ courier.label }</a></td><td><span class="cta secondary"><a target="_blank" href="${ courier.url }">Register</a></span></td></tr>` : '' }
                    </table>
                    <h2>Hallway Track</h2>
                    <h3>Conference Directory</h3>
                    ${ ticket.github && ticket.github !== ''
                        ? `<p>You have been added to the Conference Directory ✅<p>
                        <p>We have also generated a <a href="/tickets/${ ticket.number }" target="_blank">virtual ticket</a> that you can share on social media. Anyone who registers via your virtual ticket page gets 10% off!</p>`
                        : `<p>Let folks know you're attending CascadiaJS this year! We use <a target="_blank" href="https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps">Github OAuth</a> to retrieve your profile photo and add it to our Conference Directory. We will also generate a customized virtual ticket for you to share on social media!</p>
                        <div class="cta secondary"><a href="https://github.com/login/oauth/authorize?client_id=${clientID}">Get Added to Directory</a></div>`
                    }`
                : ``}
                <h2>Need Help?</h2>
                <p>Please contact us in the Discord at #help-questions.</p>
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
