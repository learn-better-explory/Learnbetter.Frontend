import { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import tableStyle from "./TablesStyle.module.css";
import styles from "./TableShowStyle.module.css";
import { useGlobalState } from "./context";

export function TableHeader() {}

export function DefinitionComponent(props) {
  return (
    <div className={styles.mainContainer}>
      <p className={styles.words}>{props.word}</p>
      <div className={styles.description}>{props.description}</div>
    </div>
  );
}

export default function TableMenu() {
  const { tableId } = useParams();

  const { token, id } = useGlobalState();
  const [tableData, setTableData] = useState({});
  const [wordsData, setWordsData] = useState();
  if (tableId === undefined) return;

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
          setTableData(data); // Ustawiamy dane w stanie
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      }
    };
    getDataFromTable();
  }, [token, id]);

  if (tableData && tableData.words && wordsData === undefined) {
    setWordsData(tableData.words);
  }

  return (
    <div id={tableStyle.mainDiv} className={tableStyle.topCornersRounded}>
      <div
        id={tableStyle.header}
        className={tableStyle.topCornersRounded}
        style={{
          height: 175 + "px",
          fontSize: 48 + "px",
          alignContent: "center",
        }}
      >
        <p style={{ float: "left" }}> {tableData.tableName} </p>
        <Link to={`/game/${tableId}/connecting`}>
          <div id={styles.gameButton}></div>
        </Link>
      </div>
      {wordsData === undefined
        ? ""
        : wordsData.map((word) => (
            <DefinitionComponent
              key={word.wordId}
              word={word.word}
              description={word.description}
            />
          ))}
    </div>
  );
}
