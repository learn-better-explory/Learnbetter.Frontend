import React, { useState, useEffect } from "react";
import { useGlobalState } from "./context";

export default function GetAllValuesFromTables() {
  const { token, id } = useGlobalState();
  const [result, setResult] = useState([]); // Przechowujemy dane w stanie

  useEffect(() => {
    const getDataFromTables = async () => {
      if (token && token !== "null") {
        try {
          const response = await fetch(
            `http://localhost:8080/api/v1/${id}/tables`,
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
          setResult(data); // Ustawiamy dane w stanie
        } catch (error) {
          console.error("Błąd podczas pobierania danych:", error);
        }
      }
    };

    getDataFromTables();
  }, [token, id]); // Wywołujemy efekt, gdy zmienia się token lub id

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
