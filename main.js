document.addEventListener("DOMContentLoaded", function () {
  // Retrieval of a quote
  function getQuote() {
    axios
      .get("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(function (response) {
        const quote = response.data[0];
        displayQuote(quote);
      });
  }

  // Display of the quote
  function displayQuote(quote) {
    const quoteHtml = `
          <div>
              <img src="${quote.image}" alt="${quote.character}" />
              <p><strong>${quote.character}</strong>: ${quote.quote}</p>
          </div>
      `;
    document.getElementById("quote").innerHTML = quoteHtml;
  }

  // Initial loading
  getQuote();

  // Reload a new quote with a click
  document.getElementById("loadQuote").addEventListener("click", getQuote);
});
