export default function Registration() {

  const sendDataToAPI = async () => {
    const data = {
      username: 'Testd',
      password: '123',
      email: 'johndodeee@example.com',
    };

    console.log(JSON.stringify(data));
    try {
      const response = await fetch('http://localhost:8080/api/v1/register', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.log(response)
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log("Success " + result.message)
    } catch (error) {
      console.log(error)
      console.log(error.message)
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
