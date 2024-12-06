import { useEffect, useState } from "react";
import "./App.css";
import { colors, quotes } from "./utils/constants";
import QuoteBox from "./components/QuoteBox/QuoteBox.jsx";
import gitHubIcon from "./assets/github.svg";

function App() {
  const [quote, setQuote] = useState({});
  const [color, setColor] = useState("");

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  const changeColor = () => {
    const newcolor = colors[Math.floor(Math.random() * colors.length)];

    setColor(newcolor);
  };

  const clickNewQuote = () => {
    const newQuote = getRandomQuote();

    while (quote === newQuote) {
      newQuote = getRandomQuote();
    }

    setQuote(newQuote);

    changeColor();
  };

  useEffect(() => {
    setQuote(getRandomQuote);
    changeColor();
  }, []);

  return (
    <div className="page">
      <div
        className={`app d-flex justify-content-center align-items-center bg-${color}`}
      >
        <QuoteBox quote={quote} color={color} onNewQuote={clickNewQuote} />
      </div>
      <footer class="footer fixed-bottom bg-white">
        <div class="container text-center">
          <span class={`text-${color} copyright`}>
            &copy; Nathaniel Daley 2024{" "}
            <a
              href="https://github.com/nathanielDaley/random-quote-machine"
              target="_blank"
            >
              <img src={gitHubIcon}></img>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
