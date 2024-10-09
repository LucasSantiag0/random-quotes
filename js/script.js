function generateQuote(){
    let quotes = {
        "- Denis Diderot" : '"Man will never be free until the last king is strangled with the entrails of the last priest."', "- Aristotle Onassis" : '"We must free ourselves of the hope that the sea will ever rest. We must learn to sail in high winds."', "- Aristotle" : '"Love is composed of a single soul inhabiting two bodies."', 'Aristotle' : '"You will never do anything in this world without courage. It is the greatest quality of the mind next to honor."'
    }

    let allAuthors = Object.keys(quotes);
    
    let oneAuthor = allAuthors[Math.floor(Math.random() * allAuthors.length)]
    
    let quote = quotes[oneAuthor];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = oneAuthor;
}