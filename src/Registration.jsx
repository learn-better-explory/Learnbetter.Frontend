export default function Registration() {

  const sendDataToAPI = async () => {
    const data = {
      name: 'John Doe',
      password: '123',
      email: 'johndoe@example.com',
    };

    console.log("1")
    try {
      const response = await fetch('http://localhost:8080/api/v1/register', {
        mode: 'no-cors',  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log("1")

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      //setResponseMessage(`Success: ${result.message}`);
    } catch (error) {
      console.log(error)
      //setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className="container">
        <form action="" method="post">
          <label htmlFor="email">email</label>
          <br></br>
          <input name="email" type="text" />
          <br></br>
          <label htmlFor="imie">imie</label>
          <br></br>
          <input name="imie" type="text" />
          <br></br>
          <label htmlFor="nazwisko">nazwisko</label>
          <br></br>
          <input name="nazwisko" type="text" />
        </form>
        <button type='button' onClick={() => sendDataToAPI()}>Wyślij</button>
      </div>
    </>
  );
}
