import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useGlobalState } from "../../context";

export default function GoogGame() {
  const { idCokolwiek } = useParams();
  console.log(idCokolwiek);

  const { token, id } = useGlobalState();
  const [result, setResult] = useState([]);

  useEffect(() => {
    const getDataFromTables = async () => {
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
          setResult(Array.isArray(data) ? data : []); // Sprawdzamy, czy data to tablica
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      }
    };

    getDataFromTables();
  }, [token, id, idCokolwiek]); // Dodajemy idCokolwiek do zależności useEffect

  return (
    <div>
      <h2>Lista Tabel</h2>
      <ul>
        {result.map((table) => (
          <li key={table.tableId}>
            <strong>{table.tableName}</strong>: {table.tableDescription}
          </li>
        ))}
      </ul>
    </div>
  );
}
