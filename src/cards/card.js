import React from "react";

const Cards = ({ arrTaste, toggle, toggleChange, mouseHandler, onBuy }) => {
  return toggle.map((_, index) => {
    const handleBuy = (e) => {
      e.preventDefault();
      onBuy(index);
    };
    const className = `Cards ${arrTaste[index].disable ? "disabled" : ""}  ${
      toggle[index].state ? "selecteds" : "actives"
    }`;
    return (
      <div key={index}>
        <div className={className}>
          <div
            className={`Card ${arrTaste[index].disable ? "disabled" : ""}`}
            onClick={() => toggleChange(index)}
            onMouseLeave={() => mouseHandler(index)}
          >
            <div className="header">
              <div className="title">
                <span className="titleActive">Котэ не одобряет?</span>
                <span className="titleDefault">Сказочное заморское яство</span>
              </div>
              <div className="name">Нямушка</div>
              <div className="taste">{arrTaste[index].taste}</div>
              <div className="info">
                <div className="count">{arrTaste[index].count} порций </div>
                <div className="prize">{arrTaste[index].prize}</div>
              </div>
            </div>
            <div className={"cirkle"}>
              <div className="weight">{arrTaste[index].weight}</div>
              <span className="weights">КГ</span>
            </div>
          </div>
        </div>
        <span>
          {!toggle[index].state ? (
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
