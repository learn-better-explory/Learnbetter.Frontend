import React, { useState } from "react";
import { useGlobalState } from "./context";

export default function AddTable() {
  const { token, id } = useGlobalState();
  const [tableName, setTableName] = useState(""); // Stan dla nazwy tabeli
  const [tableDescription, setTableDescription] = useState(""); // Stan dla opisu tabeli
  const [result, setResult] = useState(null); // Przechowujemy zwrócone ID tabeli

  const addTable = async (event) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony
    if (token && token !== "null") {
      try {
        const response = await fetch(
          `http://localhost:8080/api/v1/${id}/addTable`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ tableName, tableDescription }), // Wysyłamy dane z formularza
          }
        );

        const data = await response.json();
        setResult(data); // Ustawiamy zwrócone ID tabeli w stanie
      } catch (error) {
        console.error("Błąd podczas dodawania tabeli:", error);
      }
    }
  };

  return (
    <div>
      <form onSubmit={addTable}>
        <label htmlFor="tableName">Podaj nazwę tabeli</label>
        <input
          type="text"
          id="tableName"
          name="tableName"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)} // Aktualizujemy stan
        />

        <label htmlFor="tableDescription">Podaj opis tabeli</label>
        <input
          type="text"
          id="tableDescription"
          name="tableDescription"
          value={tableDescription}
          onChange={(e) => setTableDescription(e.target.value)} // Aktualizujemy stan
        />

        <button type="submit">Dodaj tabelę</button>
      </form>

      {result && <p>Dodano tabelę o ID: {result.tableId}</p>}
    </div>
  );
}
