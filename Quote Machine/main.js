var endPoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';
var quoteBlock = document.querySelector('.quote-text');
function getQuote() {
    fetch(endPoint)
        .then (function (response) {
            return response.json();
        })
        .then (function (data) {
            quoteBlock.textContent = `${data.message}`;
        })
        .catch (function () {
            console.log('An error has occurred.');
        });
}

var newQuoteButton = document.querySelector('.new-quote');
newQuoteButton.addEventListener('click', getQuote);

getQuote();

