import React, { useEffect, useState } from "react";
import styles from "./TablesStyle.module.css";
import { useGlobalState } from "./context";

const GetTables = () => {
  const { token, id } = useGlobalState(); // Pobieramy token i ID z globalnego stanu
  const [tables, setTables] = useState([]); // Stan do przechowywania tabel
  const [error, setError] = useState(null); // Stan do przechowywania błędów

  useEffect(() => {
    const fetchTables = async () => {
      if (!token || !id) {
        setError("Brak tokena lub ID. Nie można pobrać tabel.");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/${id}/tables`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
              Authorization: `Bearer ${token}`, // Dodajemy token do nagłówków
            },
          }
        );

        if (!response.ok) {
          if (response.status === 403) {
            setError("Brak dostępu: nieprawidłowy token lub brak uprawnień.");
          } else {
            setError(
              `Błąd serwera: ${response.status} - ${response.statusText}`
            );
          }
          return;
        }

        const result = await response.json();

        console.log(result);

        setTables(result); // Zapisujemy pobrane tabele w stanie
      } catch (error) {
        setError(`Wystąpił błąd podczas pobierania danych: ${error.message}`);
      }
    };

    fetchTables();
  }, [token, id]); // Uruchamiamy efekt, gdy token lub ID się zmienią

  if (error) {
    return <div>Błąd: {error}</div>; // Wyświetlamy komunikat o błędzie, jeśli wystąpi
  }

  return (
    <div id={styles.mainDiv} className={styles.topCornersRounded}>
      <div id={styles.header} className={styles.topCornersRounded}>
        Twoje tabele:
      </div>
      {tables.map((table) => (
        <TableComponent
          key={table.tableId}
          tableId={table.tableId}
          tableName={table.tableName}
          tableDesc={table.tableDescription}
          definitionsCount={table.definitionsCount}
        ></TableComponent>
      ))}
    </div>
  );
};

function TableComponent(props) {
  let loc = "http://localhost:5173/ShowTable/" + props.tableId;
  console.log(loc);
  console.log(props.tableId);
  return (
    <div
      className={styles.tableContainer}
      onClick={() => (window.location.href = loc)}
    >
      <p className={styles.tableName}>{props.tableName}</p>

      <div className={styles.tableDescription}>{props.tableDesc}</div>
      <div className={styles.definitionsDiv}>
        <p className={styles.top}>Ilość definicji:</p>
        <p className={styles.bottom}>{props.definitionsCount}</p>
      </div>
    </div>
  );
}

export default GetTables;
