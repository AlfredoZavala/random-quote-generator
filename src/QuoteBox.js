import React, {useState, useEffect} from 'react';
import { IoMdQuote } from 'react-icons/io';
import { AiFillTwitterSquare } from 'react-icons/ai';


/**
 * Quotation card
 * Powered by the Quotable API
 * https://github.com/lukePeavey/quotable
 */


const QuoteBox = () => {

    const [quote, setQuote] = useState("");
    const [author, setAutor] = useState("");
    const twitterLink = "http://www.twitter.com/intent/tweet?text=" + quote + "&hashtags=" + author.replace(/\s+/g, '');

    /* Twitter Icon btn styling */
    
    const style = { 
        color: "#CECECE",
        height: "100%",
        width: "250%",
        background: "#48515D"
    };
    
    
    const handleClick = () => {
        console.log('New Quote Button Clicked');

        fetch("https://api.quotable.io/random")
        .then(res => res.json()) 
        .then(
            (quote) => {
            setQuote(quote.content);
            setAutor(quote.author);
            }
      )
    }

    useEffect( () => {
        fetch("https://api.quotable.io/random")
          .then(res => res.json()) 
          .then(
            (quote) => {
              setQuote(quote.content);
              setAutor(quote.author);
            }
          )
      },[]);

    return (  
        <div className="quotebox" id="quote-box">
            <p id="text"> { quote }</p>
            <p id="author">- { author }</p>
            <div className="buttons">
                <a id="tweet-quote" target="_blank" href={twitterLink}>
                    <AiFillTwitterSquare className="tweetQuote" />
                </a>
                <button id="new-quote" onClick={handleClick}>New Quote</button>
            </div>
        </div>
    );
}
 
export default QuoteBox;
