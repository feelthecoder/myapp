import React, { act, useEffect, useState } from "react";
import Card from "./Card";
import '../Board.css';

const Board = () => {
    const [cards, setCards] = useState([]);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedIndices, setMatchedIndices] = useState([]);
    const [winner, setWinner] = useState(null);
    const [score, setScore] = useState(0);
    const [seconds, setSeconds] = useState(120);
    const [active, setActive] = useState(false);

    useEffect(() => {
        setCards(generateCards());
    }, []);



    useEffect(() => {

        let timer;

        if (active) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);

    }, [active]);

    useEffect(() => {

        if (score >= 70) {
            setWinner(true);
            setActive(false);
        }

        if (seconds === 0) {
            setActive(false);
            if (score >= 70) {
                setWinner(true)
            } else {
                setWinner(false)
            }
        }
    }, [seconds]);

    const generateCards = () => {
        const cardValues = ['1', '2', '3', '4', '5', '6', '7', '8'];
        const totalPairs = 2;
        let cards = [];
        for (let i = 0; i < totalPairs; i++) {
            cardValues.forEach((value) => {
                cards.push({ id: cards.length, value });
            });
        }

        cards = shuffle(cards);

        return cards;
    };

    const shuffle = (array) => {
        let currentIndex = array.length;
        let tempValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;

        };
        return array;
    };

    const checkForMatch = (flippedIndices) => {

        const [firstIndex, secondIndex] = flippedIndices;

        var newMatchedIndices = matchedIndices

        if (cards[firstIndex].value === cards[secondIndex].value) {
            setScore(score + 10);
            newMatchedIndices = [...matchedIndices, firstIndex, secondIndex]
        }

        setMatchedIndices(newMatchedIndices);
        setFlippedIndices([]);

    }


    const handleCardClick = (index) => {


        if (flippedIndices.includes(index) || matchedIndices.includes(index)) {
            return
        }

        const newFlippedIndices = [...flippedIndices, index];
        setFlippedIndices(newFlippedIndices);

        if (newFlippedIndices.length === 2) {
            setTimeout(() => {
                checkForMatch(newFlippedIndices);
            }, 300);
        }
    };

    const startGame = (event) => {
        if (event.target.innerText === "Play Now") {
            setActive(true);
            setSeconds(120);
            setScore(0);
            setMatchedIndices([]);
            setFlippedIndices([]);
        }
        else if (event.target.innerText == 'Play Again!') {
            setActive(true);
            setWinner(null);
            setSeconds(120);
            setScore(0);
            setMatchedIndices([]);
            setFlippedIndices([]);
        }
        else {
            setActive(false);
            setWinner(null);
            setSeconds(120);
            setScore(0);
            setMatchedIndices([]);
            setFlippedIndices([]);
        }
    }



    return (
        <div className="game">
            <h1 className="title">Memory Game : Coin Flipś</h1>
            <br />
            <button className="playButton" onClick={startGame}>{!active ? winner == null ? 'Play Now' : 'Play Again!' : 'Reset Game'}</button>
            <h2 className="timer">Timer : {seconds + ' s'}</h2>
            <h2 className="score">Score : {score}</h2>
            <h1 className={winner === null ? 'titleResult' : winner ? 'win' : 'lost'}>{winner === null ? !active?'Click on Play Now to Start':'Keep Playing..Waiting for results' : winner ? 'You Win !' : 'You Lost !'}</h1>
            <div className="board">
                {cards.map((card, index) => (
                    <Card isActive={active} key={index} value={card.value} isFlipped={flippedIndices.includes(index) || matchedIndices.includes(index)} onClick={() => handleCardClick(index)} />
                ))}
            </div>
        </div>

    );
};

export default Board;

