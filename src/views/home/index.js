let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id="home" class="page-body narrow">
                <h2>Ticket Info</h2>
                ${ ticket.hoodie && ticket.code ? '<p><span class="highlight warning">Note: Deadline to redeem Goodie Box is 9/17</span></p>' : ''}
                <ul>
                    <li><b>Ticket Type:</b> ${ ticket.ticket }</li>
                    <li><b>Conference:</b> ${ ticket.conference == 'Y' ? "Yes" : "No" }</li>
                    <li><b>Goodie Box:</b> ${ ticket.hoodie === 'Y' ? "Yes" : "No" }</li>
                    ${ ticket.hoodie === 'Y' ?
                        `<div class="cta"><a href="/home?hoodies">Redeem Goodie Box</a></div>` : '' }
                </ul>                
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
