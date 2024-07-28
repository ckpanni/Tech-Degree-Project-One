
//quotes array with requested key/val pairs

const quotes = [
  {
    quote: "There is some good in this world, and it’s worth fighting for.",
    source: "J.R.R. Tolkien",
    citation: "The Two Towers",
    year: "1954",
  },
  {
    quote:"It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
    source: "Antoine de Saint-Exupéry",
    citation: "The Little Prince",
    year: "1954",
    tags: ["French Literature", "Philosophical"],
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
];


//This function returns a random index from the quotes array.

const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
};


//This function generates a random RGB value. It then sets the background color of the body to the newly generated rgb. The making of this function is inspired from a TH lesson I saw where Guil created a function similar.

function randomBackground () {
  const red = Math.floor(Math.random() * 256 );
  const green = Math.floor(Math.random() * 256 );
  const blue = Math.floor(Math.random() * 256 );

 const rgb = `rgb(${red}, ${green}, ${blue})`;
 return document.body.style.backgroundColor = rgb;

}


//This function begins by creating a variable getQuote that returns a random object in the quotes array. Then, I start to build an HTML string with values from getRandomQuote. I use optional chaining (?.) as a safe check for the quote and the source values. I used it because I was getting console errors. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining. I then use conditional statements to build the string if certain key/val pairs exist. I call the randomBackground function to change the background color at the same time as the quote changes. Then, I set that htmlString value to the #quoteBox div.

const printQuote = () => {
  const getQuote = getRandomQuote(quotes);

  let htmlString = `<p class="quote">${getQuote?.quote}</p>
                      <p class="source">${getQuote?.source}`;

  if (getQuote.citation) {
    htmlString += `<span class="citation">${getQuote.citation}</span>`;
  }

  if (getQuote.year) {
    htmlString += `<span class="year">${getQuote.year}</span>`;
  }

  if (getQuote.tags) {
    htmlString += ` <span class="tags">${getQuote.tags}</span>`;
  }

  htmlString += "</p>";

  randomBackground();

  return (document.getElementById("quote-box").innerHTML = htmlString);
};


//The setInterval function calls the printQuote function to be run every 8 seconds. 
setInterval(printQuote, 8000);



document.getElementById("load-quote").addEventListener("click", printQuote, false);
