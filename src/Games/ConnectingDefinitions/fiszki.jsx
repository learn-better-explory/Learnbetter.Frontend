import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

import { useGlobalState } from "../../context";

export function GoodGame() {}

export default function TableMenu() {
  const { idCokolwiek } = useParams();

  const [myWord, setWord] = useState(0);
  const [toggleWord, setToggleWord] = useState(false);

  const { token, id } = useGlobalState();
  const [tableData, setTableData] = useState({});
  const [wordsData, setWordsData] = useState();
  if (idCokolwiek === undefined) return;

  useEffect(() => {
    const getDataFromTable = async () => {
      if (token && token !== "null") {
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/${id}/${idCokolwiek}`,
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
          setTableData(data); // Ustawiamy dane w stanie
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      }
    };

    getDataFromTable();
    console.log(tableData);
  }, [token, id]);

  if (tableData && tableData.words && wordsData === undefined) {
    setWordsData(tableData.words);
  }
  console.log(wordsData);

  function ChangeWord() {
    setWord(myWord + 1);
  }

  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        zIndex: "-1",
      }}
    >
      <button
        onClick={() => setToggleWord(!toggleWord)}
        style={{
          margin: "20px",
          borderRadius: "10px",
          padding: "20px",
          fontSize: "30px",
          border: "2px solid",
          backgroundColor: toggleWord === true ? "#7ef55f" : "#5ea9ff",
        }}
      >
        {wordsData === undefined
          ? null
          : toggleWord === true
          ? wordsData[myWord].word
          : wordsData[myWord].description}
      </button>
      <button
        style={{
          margin: "30px",
          borderRadius: "10px",
          padding: "10px",
          fontSize: "20px",
        }}
        onClick={() => ChangeWord()}
      >
        zmien wyraz
      </button>
    </div>
  );
}
