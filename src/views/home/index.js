let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let clientID = process.env.GITHUB_CLIENT_ID
    //let redirectURL = process.env.GITHUB_REDIRECT
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id="home" class="page-body narrow">
                <h2>Ticket Info</h2>
                <ul>
                    <li><b>Ticket Type:</b> ${ ticket.ticket }</li>
                    <li><b>Conference:</b> ${ ticket.conference == 'Y' ? "Yes" : "No" }</li>
                    <li><b>Goodie Box:</b> ${ ticket.hoodie === 'Y' ? "Yes" : "No" }</li>
                </ul>
                ${ ticket.hoodie === 'Y' ?
                    `<p><span class="highlight warning">Note: Deadline to redeem Goodie Box is 9/17</span></p>
                     <div class="cta"><a href="/home/hoodies">Redeem Goodie Box</a></div>` : '' }
                <!--
                <h2>Conference Directory</h2>
                ${ ticket.github && ticket.github !== ''
                    ? `<p>You have been added to the Conference Directory. Stay tuned, we will be launching this shortly.<p>
                    <p>We have also generated a <a href="/tickets/${ ticket.number }" target="_blank">virtual ticket</a> that you can share on social media. Anyone who registers via your virtual ticket page gets 10% off!</p>`
                    : `<p>Let folks know you're attending CascadiaJS this year! We use <a target="_blank" href="https://docs.github.com/en/developers/apps/building-github-apps/authenticating-with-github-apps">Github OAuth</a> to retrieve your profile photo and add it to our Conference Directory. We will also generate a customized virtual ticket for you to share on social media!</p>
                    <div class="cta"><a href="https://github.com/login/oauth/authorize?client_id=${clientID}">Get Added to Directory</a></div>`
                }-->
                <h2>Need Help?</h2>
                <p>Please contact us in Slack at #help-questions.</p>
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
