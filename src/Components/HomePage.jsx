import React, { useState, useEffect } from 'react';
import './HomePage.css';
import congrats from './Images/congrats.png';
import spinButton from './Images/spinButton.png';

const HomePage = () => {
  const [counts, setCounts] = useState([1, 2, 3, 4, 5, 6]);
  const [isGenerating, setIsGenerating] = useState(false); // initial generating value as false at first
  const [showPrizeText, setShowPrizeText] = useState(false); // 1st Prize text given false at initial stage

  useEffect(() => {
    let interval;
    //setting interval for counter function
    if (isGenerating) {
      interval = setInterval(() => {
        setCounts(counts.map(generateRandom));
      }, 500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isGenerating, counts]); //dependency array as generating and counts

  //for getting random result inside 1 - 10, calling the following function
  const generateRandom = (count) => {
    return generateRandomCount();
  };

  const generateRandomCount = (maxLimit = 10) => {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  };
  // after initializing first function and after specific timeout result with the text is shown after the folowing "getWinner" function
  const getWinner = () => {
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);
      setShowPrizeText(true);
    }, 3000);
  };

  const countBoxStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px',
  };

  const countStyle = {
    textAlign: 'center',
    border: '1px solid #9950b9',
    padding: '10px 15px',
    color: '#ffffff',
    fontSize: '40px',
    fontWeight: '800',
    fontStyle: 'italic',
  };

  const backgroundImageStyle = {
    width: '100%',
    position: 'relative',
  };

  const prizeTextStyle = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    animation: showPrizeText ? 'flashText 1s infinite' : 'none',
    position: 'absolute',
    top: '-60px',
    left: '50%',
    transform: 'translate(-50%, 0%)',
    transition: '.5s',
  }
  return (
    <div className="main-container" style={backgroundImageStyle}>
      <img src={congrats} alt="img" style={{ 'width': '80%' }} />
      <div id="countBox" className="count-box" style={countBoxStyle}>
        {showPrizeText && <div style={prizeTextStyle}>1ST PRIZE</div>}
        {counts.map((count, index) => (
          <div key={index} className="count" style={countStyle}>
            {count}
          </div>
        ))}
      </div>
      <div className="btn-winner" onClick={getWinner}>
        <img src={spinButton} alt="Spin Button" style={{ 'width': '300px' }} />
      </div>
    </div>
  );
};
export default HomePage;
