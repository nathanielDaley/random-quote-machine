import "./QuoteBox.css";
import { FaTwitter, FaQuoteLeft, FaTumblr } from "react-icons/fa";

function QuoteBox({ quote, color, onNewQuote }) {
  return (
    <section className="container">
      <div className="card">
        <div className="card-body" id="quote-box">
          <h2 className={`card-title text-center text-${color}`} id="text">
            <FaQuoteLeft size="30" />
            &nbsp;{quote.quote}
          </h2>
          <h4 className={`card-text text-end text-${color}`} id="author">
            - {quote.author}
          </h4>
          <a
            className="btn btn-primary mt-4"
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
          >
            <FaTwitter />
          </a>
          <button className="btn btn-primary mt-4 tumblr-button">
            <FaTumblr />
          </button>
          <button
            className="btn btn-primary mt-4 new-quote-button"
            id="new-quote"
            onClick={onNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuoteBox;
