let Layout = require('../layout')

module.exports = async function Index({ ticket, socialUrl }) {
    console.log(ticket)
    let content = /*html*/ `
        <div class="campaign-container">
            <video autoplay muted loop>
                <source src="/videos/sizzle.webm" type="video/webm">
                Sorry, your browser doesn't support embedded videos.
            </video>        
            <div class="campaign-content">
                <div class="campaign-inner">
                    <h1>Join ${ ticket.fullName } at CascadiaJS 2021!</h1>
                    <div style="text-align: center;margin:32px 0 8px 0;"><img src="${ socialUrl }" width="400"/></div>
                    <h2>Use promo code BFF for 10% off a ticket!</h2>                    
                    <p>Here are just a few of the other amazing things we have in store for CascadiaJS 2021:</p>
                    <p><i class="fas fa-gamepad"></i> A pre-conference Hack Event</p>
                    <p><i class="fas fa-gifts"></i> Goodie Box with a hoodie, stickers and other fun stuff <b>shipped to you</b></p>
                    <p><i class="fas fa-turntable"></i> Opening and Closing virtual parties</p>
                    <p><i class="fas fa-file-medical"></i> In-person hybrid events in Seattle, Portland and Vancouver for vaccinated folks</p>
                    <p><i class="fas fa-microphone-stand"></i> Opening and Closing in-person After Parties</p>
                    <p>We hope to see you in Cascadia! 🌲</p>              
                    <div style="text-align:center"><div class="cta"><a href="/tickets">Ticket Info</a></div></div>
                </div>
            </div>
        </div>`
    let html = Layout({ content, title: `Join ${ ticket.fullName } at CascadiaJS 2021`, socialUrl })
    return { html }
}
