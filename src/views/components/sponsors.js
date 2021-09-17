let sponsors = require('../../shared/data/sponsors.json')

module.exports = function SponsorsContainer () {
    return /*html*/`
        <div class="sponsors-grid">
        ${ ['platinum', 'gold', 'silver', 'bronze'].map(tier => /*html*/`
            ${ sponsors.filter(s => s.tier === tier).length > 0 ? /*html*/`
                <div class="${ tier }">
                ${ sponsors.filter(s => s.tier === tier).map(s => /*html*/`
                    <div><a href="/sponsors/${ s.key }"><img src="/images/sponsors/${ s.logo }" alt="${ s.name } logo"/></a></div>`).join('')}
                </div>
            `: ''}        
        `).join('')}
        </div>`
}
