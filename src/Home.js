import React, { useState } from "react";
import TablePlayer1 from "./views/TablePlayer1";

const Home = () => {
    const [board1, setBoard1] = useState([
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
    const [board2, setBoard2] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    let position = 0

    const [shipPosition, setShipPosition] = useState("");
    const [shipSize, setShipSize] = useState("");
    
    const positionShip = (index, sIndex) => {
        console.log(index)
        console.log(sIndex)
        console.log(shipSize)
        if (shipPosition !== "") {
            for (var i = 0; i < shipSize; i++){
                if (shipPosition === "horizontal"){
                    let newArray = [...board1];
                    newArray[index][sIndex+i] = 2
                    setBoard1(newArray)
                    console.log(board1[index][sIndex])
                }else {
                    let newArray = [...board1];
                    newArray[index+i][sIndex] = 2
                    setBoard1(newArray)
                    console.log(board1[index][sIndex])
                }
            }
            console.log(board1)
            setShipPosition("");
            setShipSize("");            
        } else {
            alert("por favor escoja una nave")
        }

    }

    const selectShip = (position, size) => {
        setShipPosition(position);
        setShipSize(size);
    }


    return (
        <>
            <h2>BattleShip</h2>
            <h4>Selecciona la posición de tus naves</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="board">
                            {board1.length > 0 &&
                                board1.map((newGrid, index) => {
                                    return (
                                        <div className="myRow">
                                            {newGrid.map((subGrid, sIndex) => {
                                                position = index + "," + sIndex
                                                return (
                                                    <div
                                                        key={sIndex} // Elemento unico para React
                                                        className="grid"
                                                        id={position}
                                                        onClick={() => {
                                                            positionShip(index, sIndex);
                                                        }}>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="board">
                            {board2.length > 0 &&
                                board2.map((newGrid, index) => {
                                    return (
                                        <div className="myRow">
                                            {newGrid.map((subGrid, sIndex) => {
                                                position = index + "," + sIndex
                                                return (
                                                    <div
                                                        key={sIndex} // Elemento unico para React
                                                        className="grid"
                                                        id={position}
                                                        onClick={() => {
                                                            alert("Dio Click en el Dos")
                                                        }}>{ }
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <h4>Naves:</h4>
                <div id="ships" className="row">
                    <div className="col">
                        <div>
                            <span>Portaviones (Tamaño: 5)</span>
                        </div>
                        <div className="horizontal" onClick={(evento) => { selectShip(evento.target.className, 5) }}>Elija: Horizontal</div>
                        <div className="vertical" onClick={(evento) => { selectShip(evento.target.className, 5) }}>Elija: Vertical</div>
                    </div>
                    <div className="col">
                        <div>
                            <span>Acorazado (Tamaño: 4)</span>
                            <div className="horizontal" onClick={() => { alert("Dio Click en Horizontal") }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={() => { alert("Dio Click en Vertical") }}>Elija: Vertical</div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <span>Submarino (Tamaño: 3)</span>
                            <div className="horizontal" onClick={() => { alert("Dio Click en Horizontal") }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={() => { alert("Dio Click en Vertical") }}>Elija: Vertical</div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <span>Destructor (Tamaño: 2)</span>
                            <div className="horizontal" onClick={() => { alert("Dio Click en Horizontal") }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={() => { alert("Dio Click en Vertical") }}>Elija: Vertical</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <button id="button" onclick="startGame()">
                            Empezar juego
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;