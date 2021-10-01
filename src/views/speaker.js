
let md = require('marked')
let Layout = require('./layout')
let SocialLayout = require('./layout/social')
let assetPath = 'https://create-4jr.begin.app/_static/2021'

let Template = function(speaker) {
    const { key, name, location, company, url, twitter, title, topics, pronouns, abstract } = speaker

    return /*html*/`
    <div id="page">
        <div class="page-title">
            <div>
                <h1>${ name }</h1>
            </div>
        </div>
        <div class="page-body">
            <section class="person">
                <h2>${ title }</h2>
                <div class="topics">${ topics.map(t => `<div class=js-topic>${ t }</div>`).join('') }</div>
                <div class="abstract">${ md(abstract) }</div>
                <h2>About ${ name }</h2>
                <div class="person-info"> 
                    <div class="person-photo"><img src="${ assetPath }/${ key }.jpg" alt="photo of ${ name }"/></div>
                    <div class="person-more">
                        ${ pronouns ? `<h3>Pronouns</h3><p>${ pronouns }</p>` : '' }
                        <h3>Location</h3>
                        <p>${ location }</p>
                        <h3>Company</h3>
                        <p>${ company }</p>
                        <h3>Links</h3>
                        <div class="person-links">
                        ${ twitter ? `<div><i class="fab fa-twitter"></i> <a target="_blank" href="https://twitter.com/${ twitter }">@${ twitter }</a></div>` : '' }
                        ${ url ? `<div><i class="fa fa-globe"></i> <a href="${ url }">${ url.split("://")[1] }</a></div>` : '' }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
`
}

module.exports = async function Speaker({speaker, social}) {
    let html
    if (social !== undefined) {
        const { key, name: header, title: excerpt } = speaker
        const image = `${ assetPath }/${ key }.jpg`
        html = SocialLayout({ image, header, excerpt })
    }
    else {
        let content = Template(speaker)
        let socialUrl = `/social?path=/speakers/${ speaker.key }`
        let title = `${ speaker.name } | ${ speaker.title }`
        html = Layout({ content, title, socialUrl })
    }

    return { html }
}
