const organizers = [
    {key: 'carter-rabasa', name: 'Carter Rabasa', pronouns: 'he/him', title: 'Lead Organizer', place: 'Seattle, WA'},
    {key: 'carrie-rabasa', name: 'Carrie Rabasa', pronouns: 'she/her',  title: 'Design Lead', place: 'Seattle, WA'},
    {key: 'elise-worthy', name: 'Elise Worthy', pronouns: 'she/her',  title: 'Sponsor Lead', place: 'Seattle, WA'},
    {key: 'kate-pond', name: 'Kate Pond', pronouns: 'she/her',  title: 'Talk Review Committee', place: 'Seattle, WA'},
    {key: 'david-guttman', name: 'David Guttman', pronouns: 'he/him',  title: 'Talk Review Committee', place: 'Los Angeles, CA'},
    {key: 'brenden-niedermeyer', name: 'Brenden Niedermeyer', pronouns: 'he/him',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'nicole-oliver', name: 'Nicole Oliver', pronouns: 'she/her',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'greg-bulmash', name: 'Greg Bulmash', pronouns: 'he/him/his',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'brian-love', name: 'Brian Love', pronouns: 'he/him',  title: 'Portland Lead', place: 'Portland, OR'},
    {key: 'kyle-bjordahl', name: 'Kyle Bjordahl', pronouns: 'he/him',  title: 'Portland Volunteer', place: 'Portland, OR'},
    {key: 'faddah-wolf', name: 'Faddah Wolf', pronouns: 'he/him/his',  title: 'Portland Volunteer', place: 'Portland, OR'},
    {key: 'michael-goff', name: 'Michael Goff', pronouns: 'he/him',  title: 'Portland Volunteer', place: 'Portland, OR'},
    {key: 'jeff-griffiths', name: 'Jeff Griffiths', pronouns: 'he/him',  title: 'Vancouver BC Lead', place: 'Vancouver, BC'},
    {key: 'elise-yohm', name: 'Elise Yohm', pronouns: 'she/her',  title: 'Vancouver BC Volunteer', place: 'Vancouver, BC'},
    {key: 'shawn-mckay', name: 'Shawn McKay', pronouns: 'he/him',  title: 'Vancouver BC Volunteer', place: 'Vancouver, BC'},
    {key: 'ria-carmin', name: 'Ria Carmin', pronouns: 'she/her',  title: 'Vancouver BC Volunteer', place: 'Vancouver, BC'},
    {key: 'taelur-myers', name: 'Taelur Myers-Lambert', pronouns: 'she/her',  title: 'Emcee', place: 'Jacksonville, FL'}
]

module.exports = function OrganizerContainer () {
    return /*html*/`
    <div id="organizer-list">
        ${ organizers.map(o => /*html*/`
        <div class="organizer">
            <div class="organizer-photo"><img src="/images/organizers/${ o.key }.jpg" alt="" /></div></a>
            <div class="organizer-info">
                <div class="organizer-name">${ o.name }</div>
                <div class="organizer-misc">${ o.title }<br/>${ o.pronouns }<br/>${ o.place }</div>
            </div>
        </div>`).join("")}
    </div>`
}
