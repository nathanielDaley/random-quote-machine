import "./QuoteBox.css";
import { FaTwitter, FaQuoteLeft, FaTumblr } from "react-icons/fa";

function QuoteBox({ quote }) {
  return (
    <section className="container" id="quote-box">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title text-center" id="text">
            <FaQuoteLeft size="30" />
            &nbsp;{quote.quote}
          </h2>
          <h4 className="card-text text-end" id="author">
            - {quote.author}
          </h4>
          <button className="btn btn-primary mt-4">
            <FaTwitter />
          </button>
          <button
            className="btn btn-primary mt-4"
            style={{ marginLeft: "10px" }}
          >
            <FaTumblr />
          </button>
          <button className="btn btn-primary mt-4" style={{ float: "right" }}>
            New Quote
          </button>
        </div>
      </div>
    </section>
  );
}

export default QuoteBox;
