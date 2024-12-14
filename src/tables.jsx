export default async function GetTables() {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  // Sprawdzenie, czy dane istnieją
  if (!id || !token) {
    console.error("ID lub token nie jest dostępny w localStorage.");
    return null;
  }

  try {
    const response = await fetch(`http://localhost:8080/api/v1/${id}/tables`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
        Authorization: `Bearer ${token}`, // Dodaj token do nagłówka
      },
    });

    if (!response.ok) {
      console.error(`Błąd: ${response.status} - ${response.statusText}`);
      if (response.status === 403) {
        console.error("Brak dostępu: nieprawidłowy token lub brak uprawnień.");
      }
      return null; // Zwróć null w przypadku błędu
    }

    const result = await response.json();
    console.log(result); // Debug: wyświetlenie wyników
    return result; // Zwracamy dane z serwera
  } catch (error) {
    console.error("Wystąpił błąd podczas pobierania danych:", error);
    return null;
  }
}
