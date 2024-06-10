import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './QuoteCarousel.css';

const QuoteCarousel = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://strangerthings-quotes.vercel.app/api/quotes/50')
      .then(response => response.json())
      .then(data => {
        setQuotes(data);
      })
      .catch(error => {
        console.error('Error fetching quotes:', error);
      });
  }, []);

  return (
    <Carousel>
      {quotes.map((quote, index) => (
        <Carousel.Item key={index}>
          <div className="quote-slide">
            <p className="quote-text">"{quote.quote}"</p>
            <p className="quote-author">- {quote.author}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default QuoteCarousel;
