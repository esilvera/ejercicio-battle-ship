import React, { useState } from "react";
import TablePlayer1 from "./views/TablePlayer1";

const Home = () => {
    const [board1, setBoard1] = useState([
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
    let table = ""

    const [shipSize1, setShipSize1] = useState(["", "", "", ""]);
    const [shipPosition1, setShipPosition1] = useState("");
    const [chosenSize1, setChosenSize1] = useState("");
    const [shipSize2, setShipSize2] = useState(["", "", "", ""]);
    const [shipPosition2, setShipPosition2] = useState("");
    const [chosenSize2, setChosenSize2] = useState("");


    const positionShip1 = (index, sIndex) => {
        if (shipPosition1 !== "") {
            console.log("zona tiene: ", board1[index][sIndex])
            if (board1[index][sIndex] === 0) {
                for (var i = 0; i < chosenSize1; i++) {
                    if (shipPosition1 === "horizontal") {
                        let newArray = [...board1];
                        newArray[index][sIndex + i] = 1
                        setBoard1(newArray)
                    } else {
                        let newArray = [...board1];
                        newArray[index + i][sIndex] = 1
                        setBoard1(newArray)
                    }
                }
                console.log(board1)
                setShipPosition1("");
                setChosenSize1("");
            } else {
                alert("Por favor elija otra zona")
            }
        } else {
            alert("Por favor escoja una nave")
        }
    }

    const selectShip = (position, size) => {
        let newArray = [...shipSize1];

        if (newArray[size] === "" || newArray[size] !== size) {
            newArray[size] = size;
            setShipSize1(newArray);
            console.log("shipSize tiene: ", shipSize1)
            setShipPosition1(position);
            setChosenSize1(size);
        } else {
            alert("Nave ya asignada por favor elija otra")
        }
    }


    return (
        <>
            <h2>BattleShip</h2>
            <h4>Selecciona la posición de tus naves</h4>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h3>Jugador 1</h3>
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
                                                            positionShip1(index, sIndex);
                                                            table = "board1"
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
                        <h3>Jugador 2</h3>
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
                                                            table = "board2"
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
                <br></br>
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
                            <div className="horizontal" onClick={(evento) => { selectShip(evento.target.className, 4) }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={(evento) => { selectShip(evento.target.className, 4) }}>Elija: Vertical</div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <span>Submarino (Tamaño: 3)</span>
                            <div className="horizontal" onClick={(evento) => { selectShip(evento.target.className, 3) }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={(evento) => { selectShip(evento.target.className, 3) }}>Elija: Vertical</div>
                        </div>
                    </div>
                    <div className="col">
                        <div>
                            <span>Destructor (Tamaño: 2)</span>
                            <div className="horizontal" onClick={(evento) => { selectShip(evento.target.className, 2) }}>Elija: Horizontal</div>
                            <div className="vertical" onClick={(evento) => { selectShip(evento.target.className, 2) }}>Elija: Vertical</div>
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