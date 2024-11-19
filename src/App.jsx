import { useEffect, useState } from "react";
import "./App.css";
import { quotes } from "./utils/constants";
import QuoteBox from "./components/QuoteBox/QuoteBox.jsx";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

function App() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    setQuote(getRandomQuote);
  }, []);

  return (
    <div className="app">
      <QuoteBox quote={quote} />
    </div>
  );
}

export default App;
