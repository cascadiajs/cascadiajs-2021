module.exports = async function Social({ ticket }) {
    console.log(ticket)
    // pull out location
    let locShort, locLong
    if (ticket.ticket.indexOf('Seattle') > -1) {
        locShort = 'SEA'
        locLong = 'Seattle Hybrid Event'
    }
    else if (ticket.ticket.indexOf('Portland') > -1) {
        locShort = 'PDX'
        locLong = 'Portland Hybrid Event'
    }
    else if (ticket.ticket.indexOf('Vancouver') > -1) {
        locShort = 'YVR'
        locLong = 'Vancouver, BC Hybrid Event'
    }
    else {
        locShort = 'WWW'
        locLong = 'Virtual Event'
    }
    // brag about early bird!
    let type
    if (ticket.ticket.indexOf('Early Bird')) {
        type = 'Early Bird'
    }
    else {
        type = ''
    }
    let html = /*html*/ `
        <!DOCTYPE html>
        <html>
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/lwl4pkp.css">
                <style>      
                    #ticket  {
                        background-image: url("/images/ticket-blue-background.png");
                        width: 1200px;
                        height: 628px;
                        }
            
                    .left-content {
                        padding-top: 100px;
                        padding-left: 200px;
                        height: 528px;
                        position: relative;
                    }
            
                    .name {
                        font-family: mono45-headline, monospace;
                        font-weight: 500;
                        font-style: normal;
                        font-size: 80px;
                        line-height: 80px;
                        color: #fff;
                        max-width: 650px;
                    }
            
                    .ticket-number {
                        font-family: mono45-headline, monospace;
                        font-weight: 300;
                        font-style: normal; 
                        font-size: 54px;
                        color: #ffffff;
                        line-height: 65px;
                    }
            
                    .event {
                        font-family: ibm-plex-mono, sans-serif;
                        font-weight: 400;
                        font-style: italic;
                        font-size: 32px;
                        line-height: 60px;
                        color: #17C37B;
                    }
            
                    .virtual-ticket-logo {
                        position: absolute;
                        left: 200px;
                        bottom: 100px;
                    }
            
                    .virtual-ticket-logo img {
                        width: 425px;
                    }
            
                    .right-content {
                        float: right;
                        padding-top: 100px;
                        padding-right: 100px;
                        writing-mode: vertical-rl;
                        text-orientation: mixed;
                    }
            
                    .venue {
                        font-family: ibm-plex-mono, sans-serif;
                        font-weight: 100;
                        font-style: normal; 
                        font-size: 218px;
                        color: #17C37B;
                        line-height: 1.5em;
                    }
                </style>
            </head>    
            <body style="background-color: #ffffff;margin: 0">
                <div id="ticket">
                    <div class="right-content">
                        <div class="venue">${ locShort }</div>
                    </div>
                    <div class="left-content">
                        <div class="name">${ ticket.fullName }</div>
                        <div class="ticket-number">#${ ticket.number.toString().padStart(4, "0") } ${ type }</div>
                        <div class="event">${ locLong }</div>
                        <div class="virtual-ticket-logo">
                            <img src="/images/virtual-ticket-logo.png">
                        </div>
                    </div>
                </div>
            </body>
        </html>    
        `
    return { html }
}
