const organizers = [
    {key: 'carter-rabasa', name: 'Carter Rabasa', pronouns: 'He/him', title: 'Lead Organizer', place: 'Seattle, WA'},
    {key: 'carrie-rabasa', name: 'Carrie Rabasa', pronouns: 'She/her',  title: 'Design Lead', place: 'Seattle, WA'},
    {key: 'brenden-niedermeyer', name: 'Brenden Niedermeyer', pronouns: 'He/him',  title: 'New Speaker Lead', place: 'Seattle, WA'},
    {key: 'brian-love', name: 'Brian Love', pronouns: 'He/him',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'nicole-oliver', name: 'Nicole Oliver', pronouns: 'She/her',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'kate-pond', name: 'Kate Pond', pronouns: 'She/her',  title: 'Talk Review Committee', place: 'Seattle, WA'}
]

module.exports = function OrganizerContainer () {
    return /*html*/`
    <div id="organizer-list">
        ${ organizers.map(o => /*html*/`
        <div class="organizer">
            <div class="organizer-photo"><img src="/images/organizers/${ o.key }.jpg"/></div></a>
            <div class="organizer-info">
                <div class="organizer-name">${ o.name }</div>
                <div class="organizer-misc">${ o.title }<br/>${ o.pronouns }<br/>${ o.place }</div>
            </div>
        </div>`).join("")}
    </div>`
}
