import React, { useState, useRef } from "react";
import Cards from "./cards/card";
import "./App.css";

const arrTaste = [
  {
    taste: "с фуа-гра",
    count: 10,
    prize: "мышь в подарок",
    weight: "0,5",
    description: "Чего сидишь? Порадуй котэ",
    description2: "Печень утки разварная с артишоками.",
    disable: false,
    state: false
  },
  {
    taste: "с рыбой",
    count: 40,
    prize:"2 мыши в подарок",
    weight: 2,
    description: "Чего сидишь? Порадуй котэ",
    description2: "Филе из цыплят с трюфелями в бульоне.",
    disable: false,
    state: true
  },
  {
    taste: "с курой",
    count: 100,
    prize: "5 мышей в подарок",
    weight: 5,
    description: "Печалька, с курой закончился.",
    description2: "Головы щучьи с чесноком да свежайщая сёмгуша.",
    disable: true,
    state:false
  },
];
function App() {
  const [toggle, settoggle] = useState(arrTaste);
  const toggleRef = useRef(false);
  const toggleChange = () => {
    toggleRef.current = !toggleRef.current;
  };
  const mouseHandler = (index) => {
    if (toggleRef.current && !arrTaste[index].disable) {
      toggle[index].state = !toggle[index].state;
    }
    settoggle([...toggle]);
    toggleRef.current = false;
  };
  const onBuy = (index) => {
    toggle[index].state = !toggle[index].state;
    settoggle([...toggle]);
  };

  return (
    <>
      <div className="App">
        <div>
          <h2 className="question">Ты сегодня покормил кота?</h2>
          <div className="cards">
            <Cards
              arrTaste={arrTaste}
              toggle={toggle}
              toggleChange={toggleChange}
              mouseHandler={mouseHandler}
              onBuy={onBuy}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
