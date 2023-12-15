import React, {useState} from 'react';

import './App.css';
import {CardAll} from "./component/cardAll";


function App() {

    const options = [
        "Один",
        "Два",
        "Три",
        "Четыре",
        "Пять",
        "Шесть",
        "Семь",
    ];
    const data = [
         "half",
        "finish",
         "empty",
    ];

    const display =[

        {id:1, name:'internal (frame)'},
        {id:2,name:'external (window.open)'},
        {id:3,name:'file'},
    ]
/*
    const filtertest = (id:number)=>{
        let select = display.find(e => e.id === id)
        setValues(select)
    }
*/
    // @ts-ignore
    const onSendAllInputHandler = () => {
        console.log("Отправленная дата:", <CardAll/>);

    }
    return (
        <div className="App">
            <CardAll data={data}/>
<button onClick={onSendAllInputHandler}>plus</button>
        </div>
    );
}

export default App;
