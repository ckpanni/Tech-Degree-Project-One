/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien",
    citation: "The Two Towers",
    year: "1954"
  },
  { quote: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1954"
  },
  {   
    quote: "Beware; for I am fearless, and therefore powerful.",
    source: "Mary Shelley",
    citation: "Frankenstein",
  },
  {
    quote: "I didn't fail the test. I just found 100 ways to do it wrong.",
    source: "Benjamin Franklin",
  },
  {
    quote: "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
  },
]


/***
 * `getRandomQuote` function
***/

const getRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * arr.length) + 1;
  return arr[randomNumber];
}

getRandomQuote(quotes);


/***
 * `printQuote` function
***/

const printQuote = () => {

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);