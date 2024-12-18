import { createElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ConnectingDefinitions.module.css";
import { clone, getRandomInt, shuffle } from "../../Utils";
import { useGlobalState } from "../../context";

export default function ConnectingDefinitions() {
  const { tableId } = useParams();

  const { token, id } = useGlobalState();

  const [allWords, setAllWords] = useState([]);
  const [usedWords, setUsedWords] = useState([]);

  const [renderNextButton, setRender] = useState(false);

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

  let copyAllWords = clone(allWords);
  let useWords = [];
  let iter = copyAllWords.length > 5 ? 5 : copyAllWords.length;
  console.log(copyAllWords);
  for (let i = 0; i < iter; i++) {
    console.log(copyAllWords);
    let rand = getRandomInt(copyAllWords.length);
    useWords.push(copyAllWords[rand]);
    copyAllWords.splice(rand, 1);
  }
  if (usedWords.length === 0 && useWords != 0) {
    setUsedWords(useWords);
  }

  function getWordId(element) {
    return element.attributes.getNamedItem("wordid").nodeValue;
  }

  let defButtonsEl;
  let anwserButtonsEl;
  let selectedDefButton;
  const defaultBackgroundColor = "#F2F2F3";
  const clickedBackgroundColor = "grey";
  const correctBackgroundColor = "#7ef55f";
  const incorrectBackgroundColor = "#f74848";

  useEffect(() => {
    defButtonsEl = Array.from(document.getElementsByName("defButton"));
    anwserButtonsEl = Array.from(document.getElementsByName("answerButton"));
  });

  function handleDefButtonClick(e) {
    if (!defButtonsEl.includes(e.target)) {
      return;
    }

    defButtonsEl.forEach((el) => {
      el.style = `background-color: ${defaultBackgroundColor};`;
    });
    anwserButtonsEl.forEach((el) => {
      el.style = `background-color: ${defaultBackgroundColor}; font-size: 17px;`;
    });

    if (selectedDefButton != e.target) {
      selectedDefButton = e.target;
      selectedDefButton.style = `background-color: ${clickedBackgroundColor};`;
    } else {
      selectedDefButton = null;
    }
  }

  function handleAnswerButtonClick(e) {
    if (selectedDefButton == null) {
      return;
    }

    if (getWordId(e.target) == getWordId(selectedDefButton)) {
      e.target.style = `background-color: ${correctBackgroundColor}; font-size: 17px;`;
      selectedDefButton.style = `background-color:${correctBackgroundColor};`;

      const indexDef = defButtonsEl.indexOf(selectedDefButton);
      const indexAnwser = anwserButtonsEl.indexOf(e.target);
      defButtonsEl.splice(indexDef, 1);
      anwserButtonsEl.splice(indexAnwser, 1);

      if (defButtonsEl.length === 0) {
        setRender(true);
      }
    } else {
      e.target.style = `background-color: ${incorrectBackgroundColor}; font-size: 17px;`;
      selectedDefButton.style = `background-color:${incorrectBackgroundColor};`;
    }
    selectedDefButton = null;
  }

  function DefButton(props) {
    return (
      <td className={styles.td}>
        <div
          className={styles.clickElement}
          name="defButton"
          wordid={props.wordid}
          onClick={(e) => {
            handleDefButtonClick(e);
          }}
        >
          {props.word}
        </div>
      </td>
    );
  }

  function AnwserButton(props) {
    return (
      <td className={styles.td}>
        <div
          className={styles.clickElement}
          name="answerButton"
          wordid={props.wordid}
          style={{ fontSize: 17 + "px" }}
          onClick={(e) => {
            handleAnswerButtonClick(e);
          }}
        >
          {props.word}
        </div>
      </td>
    );
  }

  function TrBody(props) {
    return (
      <tr>
        <DefButton wordid={props.wordid1} word={props.word}></DefButton>
        <AnwserButton wordid={props.wordid2} word={props.anwser}></AnwserButton>
      </tr>
    );
  }

  function TableBody() {
    let words = clone(usedWords);
    let wordDefintions = [];
    let wordAnwsers = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      wordDefintions.push({
        wordId: word.wordId,
        value: word.word,
      });

      wordAnwsers.push({
        wordId: word.wordId,
        value: word.description,
      });
    }

    wordDefintions = shuffle(wordDefintions);
    wordAnwsers = shuffle(wordAnwsers);

    return Array.from({ length: words.length }, (_, index) => (
      <TrBody
        key={wordDefintions[index].value + wordAnwsers[index].value}
        wordid1={wordDefintions[index].wordId}
        wordid2={wordAnwsers[index].wordId}
        word={wordDefintions[index].value}
        anwser={wordAnwsers[index].value}
      />
    ));
  }

  return (
    <div id={styles.container}>
      <table>
        <tbody>
          <TableBody></TableBody>
        </tbody>
      </table>
      {renderNextButton ? (
        <Link to={`/game/${tableId}/definitionGame`}>
          <button id={styles.nextButton}>Następna gra</button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
