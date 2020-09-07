import React from "react";

const Cards = ({ arrTaste, toggle, toggleChange, mouseHandler, onBuy }) => {
  return toggle.map((card, index) => {
    const handleBuy = (e) => {
      e.preventDefault();
      onBuy(index);
    };
    return (
      <div key={index}>
        <div
          className={`Card ${arrTaste[index].disable ? "disabled" : ""}`}
          onClick={() => toggleChange(index)}
          onMouseLeave={() => mouseHandler(index)}
          style={{
            border: toggle[index] ? "5px solid #d91667" : "5px solid #1698d9",
          }}
        >
          <div className="header">
            <div className="title">Сказочное заморское яство</div>
            <div className="name">Нямушка</div>
            <div className="taste">{arrTaste[index].taste}</div>
            <div className="info">
              <div className="count">{arrTaste[index].count} порций </div>
              <div className="prize">
                {arrTaste[index].prize} мышь в подарок
              </div>
            </div>
          </div>
          <div
            className={"cirkle"}
            style={{ background: toggle[index] ? "#d91667" : " #1698d9" }}
          >
            <div className="weight">{arrTaste[index].weight}</div>
            <span style={{ color: "white" }}>КГ</span>
          </div>
        </div>
        <span>
          {!toggle[index] ? (
            <span className="description">
              {arrTaste[index].description}{" "}
              {!arrTaste[index].disable ? (
                <a onClick={handleBuy} href="?">
                  купи
                </a>
              ) : (
                ""
              )}
            </span>
          ) : (
            <span className="description">{arrTaste[index].description2}</span>
          )}
        </span>
      </div>
    );
  });
};

export default Cards;
