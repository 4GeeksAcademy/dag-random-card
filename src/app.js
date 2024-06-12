/* eslint-disable */

import "./style.css";

window.onload = function() {
  //write your code here

  // document.querySelector("#number") = generateRandomNumber();

  document.querySelector(".number").innerHTML = generateRandomNumber();

  let suit = generateRandomSuit();

  document.querySelector(".topSuit").innerHTML = suit;

  document.querySelector(".bottomSuit").innerHTML = suit;

  if (suit === "&hearts;" || suit === "&diams;") {
    document.querySelector(".topSuit").style.color = "red";

    document.querySelector(".bottomSuit").style.color = "red";
  }
};

let generateRandomNumber = () => {
  let numbers = [
    "A",

    "2",

    "3",

    "4",

    "5",

    "6",

    "7",

    "8",

    "9",

    "10",

    "J",

    "Q",

    "K"
  ];

  let indexNumbers = Math.floor(Math.random() * numbers.length);

  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suits = ["&hearts;", "&clubs;", "&diams;", "&spades;"];

  let indexSuits = Math.floor(Math.random() * suits.length);

  return suits[indexSuits];
};
