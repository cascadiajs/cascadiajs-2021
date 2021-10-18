let Layout = require('./layout')
let ThinLayout = require('./layout/thin')
let { ConfSchedule } = require('./components/schedule')

function template({ confSchedule }) {
    return /*html*/`
        <div id="page">
            <div class="page-title">
                <div class="wide"><h1>Schedule</h1></div>
            </div>
            <div class="page-body wide">
                <p><i class="fas fa-calendar-alt"></i> <a href="https://airtable.com/shrFhMryCHcGdGLdW/iCal?timeZone=America%2FLos_Angeles&userLocale=en">Subscribe to the Calendar</a></p>
                ${ confSchedule }
            </div>
        </div>
    `
}

module.exports = async function Index({ speakers, thin }) {
    let confSchedule = await ConfSchedule({ speakers })
    let content = template({ confSchedule })
    let html = (thin !== undefined ? ThinLayout({ content }) : Layout({ content }))
    return { html }
}