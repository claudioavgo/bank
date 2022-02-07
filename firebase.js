import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.4/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyD0LdrA766U3DCPFHW9ru63Dkcrywmj_NE",
  authDomain: "darkbox-a.firebaseapp.com",
  databaseURL: "https://darkbox-a-default-rtdb.firebaseio.com",
  projectId: "darkbox-a",
  storageBucket: "darkbox-a.appspot.com",
  messagingSenderId: "480867554699",
  appId: "1:480867554699:web:57203acd9e1dbbfc04cb8e",
  measurementId: "G-XGBTVCXYG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  set,
  onValue,
  child,
  get,
} from "https://www.gstatic.com/firebasejs/9.6.4/firebase-database.js";

function calc(number){
    return number * 2
}

function search(name) {
    const dbRef = ref(getDatabase());
    let msg ="aa"
    get(child(dbRef, `users/${name}`))
        .then((snapshot) => {
        if (snapshot.exists()) {
            //print.innerHTML = snapshot.val().email;
            msg = "foi"
            console.log(snapshot.val().value)
            msg = snapshot.val().value;
            balance.innerHTML = "R$ " + snapshot.val().value.replace(".", ",")
        } else {
            console.log("No data available");
            msg = "No data available";
        }
        })
        .catch((error) => {
            msg = error;
        });
    
}

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
}


let fc = 0;
function xgf() {
  if (fc == 0) {
    popover.display = "flex";
    console.log("Ativado");
    fc = 1;
  } else if (fc == 1) {
    console.log("Desativado");
    popover.display = "none";
    fc = 0;
  }
}

function tng(){
    console.log("aca")
}

export { search, calc};