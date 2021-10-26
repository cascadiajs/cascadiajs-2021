let LiveLayout = require('../layout/live')

module.exports = async function Expo() {
    let content = /*html*/`
        <pre>This will be an Expo Hall</pre>
    `
    let html = LiveLayout({ content })
    return { html }
}


