import { search, calc} from "http://127.0.0.1:5500/firebase.js"

search("01")
const balance = document.getElementById("balance")

function notify(){
  const NOTIFICATION_TITLE = 'Atividade A'
  const NOTIFICATION_BODY = 'Fazer exercícios de português!'
  const CLICK_MESSAGE = 'Notification clicked!'

  new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
}

