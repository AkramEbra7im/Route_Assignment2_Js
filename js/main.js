var arrOfQuotes = [
    { quote: "“Be yourself; everyone else is already taken.”", author: '-- Oscar Wilde' },
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author: '--Marilyn Monroe'
    },
    { quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", author: "-- Albert Einstein" },
    { quote: "“So many books, so little time.”", author: "-- Frank Zappa" },
    { quote: "“A room without books is like a body without a soul.”", author: "-- Marcus Tullius Cicero" },
    { quote: "“You only live once, but if you do it right, once is enough.”", author: "-- Mae West" },
]
var currentIndex;

function randomQoute() {
    var indexOfQoute = Math.floor(Math.random() * arrOfQuotes.length)

    while (currentIndex == indexOfQoute) {
        indexOfQoute = Math.floor(Math.random() * arrOfQuotes.length)
    }

    currentIndex = indexOfQoute
    var ranQuote = arrOfQuotes[indexOfQoute]
    document.getElementById('quote').innerHTML = ranQuote.quote
    document.getElementById('author').innerHTML = ranQuote.author
    
}