const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "It always seems impossible until it's done. - Nelson Mandela",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const [quoteText, quoteAuthor] = randomQuote.split(' - ');

    document.getElementById('quote-text').textContent = `"${quoteText}"`;
    document.getElementById('quote-author').textContent = `— ${quoteAuthor}`;
}

document.getElementById('quote-generator-btn').addEventListener('click', generateQuote);

generateQuote(); // Display a random quote on page load
