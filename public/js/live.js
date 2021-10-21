/* eslint-disable */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, onValue} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

document.addEventListener(
  "DOMContentLoaded",
  async function main() {
    // set initial state
    const state = {
      slackView: true,
      liveText: true,
      clapping: false,
      clappingContext: undefined,
      clappingBuffer: null,
      agenda: undefined,
      agendaIndex: undefined,
    }

    // Firebase config
    const firebaseConfig = {
      apiKey: "AIzaSyBHkheP0kQXmKORe7DG4X45hSHGXyp1qm4",
      authDomain: "cascadiajs-2021-schedule.firebaseapp.com",
      databaseURL: "https://cascadiajs-2021-schedule-default-rtdb.firebaseio.com",
      projectId: "cascadiajs-2021-schedule",
      storageBucket: "cascadiajs-2021-schedule.appspot.com",
      messagingSenderId: "580950881593",
      appId: "1:580950881593:web:3afd3f2fbd5ef6b71b64e8"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // load agenda from Firebase
    const db = getDatabase();
    const agendaRef = ref(db,  "agenda");
    onValue(agendaRef, (snapshot) => {
      state.agenda = snapshot.val()
      console.log(state.agenda)
    })

    // check for audio
    try {
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      state.clappingContext = new AudioContext();
    } catch (e) {
      console.log("Web Audio API is not supported in this browser");
    }

    const CLAPPABLE = ["celebrate", "heart", "plusone", "clap", "smile"];

    function audioClap() {
      if (state.clappingContext) {
        const source = state.clappingContext.createBufferSource();
        source.buffer = state.clappingBuffer;
        // Set volume to 10%
        const gainNode = state.clappingContext.createGain();
        source.connect(gainNode);
        gainNode.connect(state.clappingContext.destination);
        gainNode.gain.value = 0.1;
        source.start();
      }
    }

    function toggleAudio() {
      state.clapping = !state.clapping;
      if (state.clappingContext) {
        if (state.clapping) {
          state.clappingContext.resume();
        } else {
          state.clappingContext.suspend();
        }
      }
    }

    // load clapping audio if we have access to the Web Audio API
    if (state.clappingContext) {
      const URL = "/sounds/applause-8.mp3";

      window
        .fetch(URL)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) =>
          state.clappingContext.decodeAudioData(arrayBuffer)
        )
        .then((audioBuffer) => {
          state.clappingBuffer = audioBuffer;
        });
    }

    // wire-up controls
    document.getElementById("slack-view-button").onclick = () => {
      state.slackView = !state.slackView;
      document
        .getElementById("live")
        .classList.replace(
          `slack-view-${!state.slackView}`,
          `slack-view-${state.slackView}`
        );
      document
        .getElementById("chat")
        .classList.replace(
          `slack-view-${!state.slackView}`,
          `slack-view-${state.slackView}`
        );
    };

    document.getElementById("stream-text-button").onclick = () => {
      state.liveText = !state.liveText;
      document
        .getElementById("stream-text")
        .classList.replace(
          `stream-text-${!state.liveText}`,
          `stream-text-${state.liveText}`
        );
    };

    /*document.querySelector("emote-widget").onEmote((event) => {
      if (CLAPPABLE.includes(event.data) && state.clapping) {
        audioClap();
      }
    });*/

    document.getElementById("clapping-audio-button").onclick = () =>
      toggleAudio();

    // Check to see if there's a new agenda item happening so we reset elements of the UI
    function checkForNewAgendaItem() {
      if (state.agenda !== undefined) {
        // find our current place in the agenda
        let currentAgendaIndex;
        let now = Date.now();
        for (let i in state.agenda) {
          let item = state.agenda[i];
          let itemTime = new Date(item.when).getTime();
          // if this item is after the current time
          if (now > itemTime) {
            currentAgendaIndex = i;
            break;
          }
        }

        if (currentAgendaIndex === undefined) {
          console.log("Waiting for agenda to begin... ", state.agenda[0])
        }
        else if (state.agendaIndex !== currentAgendaIndex) {
          // a new agenda item!
          let current = state.agenda[currentAgendaIndex];
          console.log("A new agenda item!", current);
          // reset the emote counter by pointing it at the new agenda item
          document
            .querySelector("emote-widget")
            .setAttribute("talk-id", current.what);
          // reset the Q&A widget
          /*let src = document.getElementById("draw-3sk").getAttribute("src");
          let queryString = src.split("?")[1];
          let queryParams = new URLSearchParams(queryString);
          let ticketKey = queryParams.get("user");
          document
            .getElementById("draw-3sk")
            .setAttribute(
              "src",
              `https://draw-3sk.begin.app/?user=${ticketKey}&talk=${current.what}`
            );*/
          // reset index
          state.agendaIndex = currentAgendaIndex;
        }
        else {
          // we are in the middle of an agenda item
        }
      }

      if (
        state.agendaIndex === undefined ||
        state.agendaIndex < state.agenda.length - 1
      ) {
        // if the show hasn't started yet OR isn't over yet, keep checking for a new agenda item
        setTimeout(() => {
          checkForNewAgendaItem();
        }, 1000 * 20 /* re-run once every 20 seconds */);
      } else {
        console.log(
          "No more agenda items, the show must be over! Thanks for attending CascadiaJS :)"
        );
      }
    }

    checkForNewAgendaItem();
  },
  false
);
