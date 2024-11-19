import "./QuoteBox.css";

function QuoteBox({ quote }) {
  return (
    <section className="quote-box" id="quote-box">
      <div className="quote__content">
        <h2 className="quote__quote" id="text">
          {quote.quote}
        </h2>
        <h4 className="quote__author" id="author">
          {quote.author}
        </h4>
      </div>
    </section>
  );
}

export default QuoteBox;
