var heading = document.getElementById("head");
var abutton = document.getElementById("abutton");
setTimeout(() => {
  heading.style.animation = "hanimation 2.5s";
  abutton.style.animation = "hanimation 2.5s";
  abutton.style.opacity = 1;
  heading.style.opacity = 1;
}, 1000);

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let links = document.getElementsByClassName("link");
let list_items = document.getElementsByTagName("li");
const links_array = Array.from(links);
const array_list_items = Array.from(list_items);

window.onload = remove_links;

function remove_links(){
  links_array.forEach(element => {
    element.remove();
  });
  // console.log("removed links");
}

function addlinks(){
  var counter = 0;
  
  array_list_items.forEach(element =>{
    element.appendChild(links_array[counter]);
    counter += 1;
  });

  // console.log("added links");
}


closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
});


function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   addlinks();
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
 }
 else {
   remove_links();
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");
 }
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import {
  getDatabase,
  set,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgAqIe_lIwhVWI8otiaNy0RhlYVDTQE34",
  authDomain: "registrations-web-app.firebaseapp.com",
  databaseURL:
    "https://registrations-web-app-default-rtdb.firebaseio.com",
  projectId: "registrations-web-app",
  storageBucket: "registrations-web-app.appspot.com",
  messagingSenderId: "347321779052",
  appId: "1:347321779052:web:41435cc5ac12b6c4326949",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const loginbutton = document.getElementById("submitbutton");
loginbutton.addEventListener("click", (e) => {
  e.preventDefault();
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sessionStorage.setItem("userid", user.uid);
      window.location.href = "https://sreshthtiwari.github.io/trial/pages/registrations.html";
      // alert("Logged in successfully");
    })
    .catch((error) => {
      const errorcode = error.code;
      const errormessage = error.message;

      alert(errormessage);
    });
});