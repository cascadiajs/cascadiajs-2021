import SpeakerTopic from './speaker-topic.js'

export default function Speaker(props) {
  props = props || {}
  let speaker = props.speaker || {}
  let selectedTopics = props.selectedTopics || []
  //let pixelated = speaker.pixelated || ''
  let topics = (speaker.topics || [])
    .map(topic => SpeakerTopic({ topic, selected: selectedTopics.includes(topic), selectedTopics }))
      .join('')

  let key
  let photoUrl
  let name
  let revealed = (new Date(speaker.reveal)).getTime() <= Date.now()

  // don't reveal the speaker yet!
  if (!revealed) {
    name = 'Secret Speaker'
    photoUrl = `https://create-4jr.begin.app/_static/2021-pixelated/${ speaker.pixelated }.png`
  }
  else {
    key = speaker.key
    name = speaker.name
    photoUrl = `https://create-4jr.begin.app/_static/2021/${ speaker.key }.jpg`
  }

  return `
    <div class="speaker">
    ${ revealed
      ? `<a href="/speakers/${key}"><div class="speaker-photo"><img src="${ photoUrl }" alt="photo of ${ name }"/></div></a>`
      : `<div class="speaker-photo"><img src="${ photoUrl }" alt="photo of ${ name }"/></div>` }
      <div class="speaker-info">
        <div class="speaker-name">${ revealed ? `<a href="/speakers/${key}">${ name} </a>` : name }</div>
        <div class="speaker-misc">
          ${ revealed
            ? `${ speaker.company }<br/>${ speaker.location }`
            : ''}
        </div>
        <!-- ${ topics } -->
      </div>
    </div>
`
}
