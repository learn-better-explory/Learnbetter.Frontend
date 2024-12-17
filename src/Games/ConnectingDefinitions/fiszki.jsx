import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";

import { useGlobalState } from "../../context";

export function GoodGame() {}

export default function TableMenu() {
  const { idCokolwiek } = useParams();

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

  return;
}
