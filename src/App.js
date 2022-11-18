import "./styles.css";
import React from "react";
import { useState, useEffect } from "react";
import { Popup } from "./components/Popup.jsx";
import { AlertMessage } from "./components/Alert.jsx";

export default function App() {
  const STARTING_TIME = 5;

  const [isModal, setModal] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isActive, setIsActive] = useState(false);

  const submit = () => {
    setIsActive(true);
    setModal(false);
  };

  const handleClick = () => {
    if (!isActive) {
      setModal(true);
      setTimeRemaining(STARTING_TIME);
    } else {
      submit();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isModal && timeRemaining > 0) {
        setTimeRemaining((sec) => sec - 1);
      }
    }, 1000);
  }, [isModal, timeRemaining]);

  return (
    <div className="App">
      <button className="btn" onClick={handleClick}>
        выполнить действие
      </button>
      {isActive ? <AlertMessage /> : ""}
      <Popup
        isVisible={isModal}
        title="Согласие с правилами"
        content={
          <p>
            «Для данной функции применяются особые условия и правила
            пользования, их необходимо подтвердить, нажав на кнопку Подтвердить»
          </p>
        }
        footer={
          <div className="footer">
            <button onClick={() => setModal(false)} className="popup-btn">
              Отмена
            </button>
            <button
              onClick={submit}
              disabled={timeRemaining === 0 ? false : true}
              className="popup-btn"
            >
              Подтвердить {timeRemaining > 0 ? timeRemaining : ""}
            </button>
          </div>
        }
        onClose={() => setModal(false)}
      />
    </div>
  );
}
