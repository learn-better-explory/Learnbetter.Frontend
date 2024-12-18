import { createElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./DefinitionGameStyle.module.css";
import { clone, getRandomInt, shuffle } from "../../Utils";
import { useGlobalState } from "../../context";
export default function DefinitionGame() {
  const { tableId } = useParams();

  const { token, id } = useGlobalState();

  const [allWords, setAllWords] = useState([]);
  const [word, setWord] = useState();
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    const getDataFromTable = async () => {
      if (token && token !== "null") {
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/${id}/${tableId}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "*/*",
              },
            }
          );

          const data = await response.json();
          if (data && data.words && allWords.length === 0) {
            setAllWords(data.words);
          }
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      }
    };
    getDataFromTable();
  }, [token, id]);

  if (allWords.length > 0 && word === undefined) {
    setWord(allWords[getRandomInt(allWords.length)]);
  }

  function buttonLogic() {
    const input = document.getElementById(styles.anwserInput);
    let anwser = input.value;

    if (correct) {
      window.location = `http://localhost:5173/ShowTable/${tableId}`;
    }

    if (anwser !== word.word) {
      input.style = "background-color: #f74848;";
    } else {
      input.style = "background-color:#7ef55f;";
      setCorrect(true);
    }
  }

  return (
    <div id={styles.mainDiv}>
      <p id={styles.title}>{word === undefined ? "" : word.description}</p>
      <p id={styles.anwserTitle}>Odpowiedź:</p>
      <input id={styles.anwserInput}></input>
      <button id={styles.confirmButton} onClick={() => buttonLogic()}>
        Potwierdź
      </button>
    </div>
  );
}
