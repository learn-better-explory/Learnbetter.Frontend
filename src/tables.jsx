import React, { useEffect, useState } from "react";
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
    <div>
      <h1>Tabele użytkownika:</h1>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>{table.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetTables;
