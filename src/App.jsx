import { useEffect, useState } from "react";
import "./App.css";
import { colors, quotes } from "./utils/constants";
import QuoteBox from "./components/QuoteBox/QuoteBox.jsx";

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

  useEffect(() => {
    setQuote(getRandomQuote);
    changeColor();
  }, []);

  return (
    <div className={`app bg-${color}`}>
      <QuoteBox quote={quote} color={color} onNewQuote={changeColor} />
    </div>
  );
}

export default App;
