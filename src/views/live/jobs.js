let LiveLayout = require('../layout/live')
let sponsors = require('../../shared/data/sponsors.json')

module.exports = function Expo({ links }) {
    let hiring = sponsors.filter(s => s.jobs)
    let discord = links.find(l => l.key === 'discord')
    let gather = links.find(l => l.key === 'gather')
    let content = /*html*/`
    <div id="page">
    <div class="page-title">
        <div>
            <h1>Companies Hiring at CascadiaJS</h1>
        </div>
    </div>
    <div class="page-body">
        <p>Connect with our event sponsors during the breaks! Chat face-to-face on Gather or stick to text on our Discord.</p>
        <br/>
        <div style="margin-bottom: 48px">
            <span class="cta"><a target="_discord" href="${ discord?.url }">Join Discord</a></span>
            <span class="cta"><a target="_gather" href="${ gather?.url }">Join Gather</a></span>
        </div>
        <div class="job-listings">
        ${ hiring.map(s => /*html*/`
            <div class="job-listing">
                <div><img src="/images/sponsors/${ s.logo }" alt=""/></div>
                <p>${ s.description }</p>
                <div><div class="cta"><a target="_blank" href="${ s.jobs }">View Jobs</a></div></div>
            </div>
        `
        ).join("")}
        </div>
    </div>
</div>
    `
    let html = LiveLayout({ content, view: 'jobs' })
    return { html }
}


