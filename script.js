let quotes = JSON.parse(localStorage.getItem("quotes")) || [
  { quote: "-I think therefore I am", author: "-René Descartes" },
  {
    quote: "-The greatest wealth is to live content with little.",
    author: "-Plato",
  },
  { quote: "-The root of suffering is attachment.", author: "-Buddha" },
  {
    quote: "-Whenever you find yourself on the side of the majority.",
    author: "-Mark Twain",
  },
  {
    quote: "-Simplicity is the ultimate sophistication.",
    author: "-Leonardo da Vinci",
  },
];

function generatequote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  document.getElementById("quote").innerHTML = selectedQuote.quote;
  document.getElementById("author").innerHTML = selectedQuote.author;
  return selectedQuote;
}

function addQuote() {
  const quoteText = document.getElementById("inputquote").value.trim();  
  const authorText = document.getElementById("addname").value.trim();

  if (quoteText === "" || authorText === "") {
    alert("Please fill in both the quote and the author name.");
    return;
  }

  const newQuote = { quote: quoteText, author: authorText };

  
  const exists = quotes.some(
    (q) => q.quote === newQuote.quote && q.author === newQuote.author
  );

  if (exists) {
    alert("Quote already exists!");
    return;
  }

  quotes.push(newQuote);
  localStorage.setItem("quotes", JSON.stringify(quotes));
  alert("Quote added successfully!");

  
  document.getElementById("inputquote").value = "";
  document.getElementById("addname").value = "";
}

function showquotes() {
  let quotesdata = JSON.stringify(quotes); 
  alert(quotesdata);
}