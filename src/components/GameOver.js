import './GameOver.css';

const GameOver = ({ retry, score }) => {
    return (
        <div className="gameOver">
            <h1>Fim de Jogo!</h1>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Recomeçar Jogo</button>
        </div>
    );
}

export default GameOver;
