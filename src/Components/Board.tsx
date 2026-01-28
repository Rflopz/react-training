import React, { useEffect } from "react";

const styles = {
    board: {
        display: "flex",
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: "100%",
        flexWrap: "wrap",
    },
    cell: {
        width: "100px",
        height: "100px",
        backgroundColor: "#0f0f0f",
        border: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
    }

} as const

const winingCombinations = [
    // rows
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    // columns
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    // diagonals
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
];

const initialBoard: boardType = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

type PlayerType = "X" | "O" | "";

const Player = {
    X: "X",
    O: "O",
} as const;

type boardType = PlayerType[][]

function Board() {
    const [board, setBoard] = React.useState<boardType>(initialBoard);
    const [currentPlayer, setCurrentPlayer] = React.useState<PlayerType>(Player.X);
    const [gameOver, setGameOver] = React.useState<boolean>(false);

    function handleCellClick(rowIndex: number, cellIndex: number) {
        const newBoard = board.map(row => [...row]);
        newBoard[rowIndex][cellIndex] = currentPlayer;
        setBoard(newBoard);
    }

    function checkForWinner(board: boardType): boolean {
        const result = winingCombinations.some(combination => {
            const [first, ...rest] = combination
            const firstValue = board[first[0]][first[1]]
            return firstValue && rest.every(([row, col]) => board[row][col] === firstValue)
        })

        return result;
    }

    function resetGame() {
        setBoard(initialBoard.map(row => [...row]));
        setGameOver(false);
        setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X);
    }

    useEffect(() => {
        if (gameOver) {
            return;
        }

        const winner = checkForWinner(board);

        if (winner) {
            setGameOver(true);
            return
        }
        setCurrentPlayer(currentPlayer === Player.X ? Player.O : Player.X);

    }, [board, gameOver])

    return (
        <>
            {gameOver ? (
                <Winner
                    winner={currentPlayer}
                    onClick={resetGame}
                />
            ) : (
                <>
                    <NextPlayer player={currentPlayer} />
                    <div style={styles.board}>
                        {board.map((row, rowIndex) => (
                            <div key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <Cell
                                        key={cellIndex}
                                        value={cell}
                                        onClick={() => handleCellClick(rowIndex, cellIndex)}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
}

function NextPlayer({
    player,
}: {
    player: string;
}) {
    return (
        <div>
            <h6>Next Player: {player}</h6>
        </div>
    );
}

function Winner({
    winner,
    onClick,
}: {
    winner: PlayerType;
    onClick: () => void;
}) {
    return (
        <div>
            <h1>Winner: {winner}</h1>
            <button onClick={onClick}>Play Again</button>
        </div>
    );
}

function Cell({
    value,
    onClick,
}: {
    value: PlayerType;
    onClick: () => void;
}) {

    function handleClick() {
        if (value) {
            alert(value + " already clicked");
            return;
        }
        onClick();
    }

    return (
        <div
            style={styles.cell}
            onClick={handleClick}
        >
            {value}
        </div>
    );
}

Board.Cell = Cell;
Board.Winner = Winner;

export default Board;