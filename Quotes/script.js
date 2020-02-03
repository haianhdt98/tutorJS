const quotes = [
    {
        name:'author 1',
        quote:'quote 1'
    },
    {
        name:'author 2',
        quote:'quote 2'
    },
    {
        name:'author 3',
        quote:'quote 3'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quote.innerHTML = quotes[number].quote;
    quoteAuthor.innerHTML = quotes[number].name;
}