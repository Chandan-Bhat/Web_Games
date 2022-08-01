// Variables

let btn = document.querySelector("#new");
let quote = document.querySelector(".quote");
console.log(quote)
let pers = document.querySelector(".person");
let ind = 0;

const qt = [{
    quote: '"Money and success don’t change people; they merely amplify what is already there."',
    person: '- Will Smith -'
}, {
    quote: '"Never let the fear of striking out keep you from playing the game."',
    person: '- Babe Ruth -'
}, {
    quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: '- Albert Einstein -'
}, {
    quote: '"Many of life’s failures are people who did not realize how close they were to success when they gave up."',
    person: '- Thomas A. Edison -'
}, {
    quote: '"You only live once, but if you do it right, once is enough."',
    person: '- Mae West -'
}, {
    quote: '"Get busy living or get busy dying."',
    person: '- Stephen King -'
}, {
    quote: '"Life is what happens when you\'re busy making other plans."',
    person: '- John Lennon -'
}, {
    quote: '“The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.”',
    person: '- Henry Ford -'
}, {
    quote: '“Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth.”',
    person: '- Various Sources -'
}, {
    quote: '"Don’t settle for what life gives you; make life better and build something."',
    person: '- Ashton Kutcher -'
}];

function next(){
    quote.innerText = qt[ind].quote;
    pers.innerText = qt[ind].person;
    ind = (ind + 1) % qt.length;
}

btn.addEventListener("click", next);