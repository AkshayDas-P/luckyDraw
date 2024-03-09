import React, { useState, useEffect } from 'react';
import './HomePage.css'; 
import congrats from './Images/congrats.png';
import spinButton from './Images/spinButton.png';

const HomePage = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(2);
  const [count3, setCount3] = useState(3);
  const [count4, setCount4] = useState(4);
  const [count5, setCount5] = useState(5);
  const [count6, setCount6] = useState(6);

  const [isGenerating, setIsGenerating] = useState(false);
  const [showPrizeText, setShowPrizeText] = useState(false);

  useEffect(() => {
    let interval;

    if (isGenerating) {
      interval = setInterval(() => {
        setCount1(generateRandom());
        setCount2(generateRandom());
        setCount3(generateRandom());
        setCount4(generateRandom());
        setCount5(generateRandom());
        setCount6(generateRandom());
      }, 500);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isGenerating]);

  const generateRandom = (maxLimit = 10) => {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
  };

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
    marginTop: '20px', 
  };

  const countStyle = {
    flex: '1',
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
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
    animation: showPrizeText ? 'flashText 1s infinite' : 'none',
}

  return (
    <div className="main-container" style={backgroundImageStyle}>
      <img src={congrats} alt="img" style={{'width':'80%'}} />
      {showPrizeText && <div style={prizeTextStyle}>1ST PRIZE</div>}
      <div id="countBox" className="count-box" style={countBoxStyle}>
        <div className="count" style={countStyle}>{count1}</div>
        <div className="count" style={countStyle}>{count2}</div>
        <div className="count" style={countStyle}>{count3}</div>
        <div className="count" style={countStyle}>{count4}</div>
        <div className="count" style={countStyle}>{count5}</div>
        <div className="count" style={countStyle}>{count6}</div>
      </div>
      <div className="btn-winner" onClick={getWinner}>
        <img src={spinButton} alt="Spin Button" style={{'width':'200px'}} />
      </div>
    </div>
  );
};

export default HomePage;
