let sponsors = require('../../shared/data/sponsors.json')

module.exports = function SponsorsContainer () {
    return /*html*/`
        <div class="sponsor-grid">
        ${ sponsors.map(s => /*html*/`
            <div><a href="/sponsors/${ s.key }"><img src="/images/sponsors/${ s.logo }" alt="${ s.name } logo"/></a></div>
        `).join("")}
        </div>`
}
