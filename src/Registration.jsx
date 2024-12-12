export default function Registration() {

  const sendDataToAPI = async () => {
    const data = {
      username: getUsersData('username'),
      password: getUsersData('password'),
      email: getUsersData('email'),
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
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      window.location.href = 'http://localhost:5173/'
    } catch (error) {

    }
  };

  function getUsersData(elementName){
    return document.getElementsByName(elementName)[0].value
  }

  function handleSendButton(){
    sendDataToAPI();
    
  }

  return (
    <>
      <div className="container">
        <form action="" method="post">
          <label htmlFor="email">email</label>
          <br></br>
          <input name="email" type="text" />
          <br></br>
          <label htmlFor="username">username</label>
          <br></br>
          <input name="username" type="text" />
          <br></br>
          <label htmlFor="password">Hasło</label>
          <br></br>
          <input name="password" type="password" />
        </form>
        <button type='button' onClick={() => handleSendButton()}>Wyślij</button>        
      </div>
    </>
  );
}
