import "./styles.css";

import { loadMenu } from "./menu.js";
import { loadHome } from "./home.js";
import { loadContact } from "./contact.js";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const contactBtn = document.querySelector("#contact-btn");


homeBtn.addEventListener('click', () => {
  loadHome();
});

menuBtn.addEventListener('click', () => {
  loadMenu();
});

contactBtn.addEventListener('click', () => {
  loadContact();
});


console.log(`hello world`)