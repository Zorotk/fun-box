import React, { useState, useRef } from "react";
import Cards from "./cards/card";
import "./App.css";
const arrTaste = [
  {
    taste: "с фуа-гра",
    count: 10,
    prize: "",
    weight: "0,5",
    description: "Чего сидишь? Порадуй котэ",
    description2: 'Печень утки разварная с артишоками.',
    disable: false,
  },
  {
    taste: "с рыбой",
    count: 40,
    prize: 2,
    weight: 2,
    description: "Чего сидишь? Порадуй котэ",
    description2: 'Филе из цыплят с трюфелями в бульоне.',
    disable: false,
  },
  {
    taste: "с курой",
    count: 100,
    prize: 5,
    weight: 5,
    description: "Печалька, с курой закончился.",
    description2: "Головы щучьи с чесноком да свежайщая сёмгуша.",
    disable: true,
  },
];
function App() {
  const [toggle, settoggle] = useState(Array(3).fill(false));
  const toggleRef = useRef(false);
  const toggleChange = (index) => {
    toggleRef.current = !toggleRef.current;
  
  };
  const mouseHandler = (index) => {
    if (toggleRef.current && !arrTaste[index].disable) {
      toggle[index] = !toggle[index];
    }
    settoggle([...toggle]);
    toggleRef.current = false;
  };
  const onBuy = (index) => {
    toggle[index] = !toggle[index]
    settoggle([...toggle])
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
