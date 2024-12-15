import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalState } from "./context";

export default function Registration() {

  let [usernameError, setUsernameError] = useState();
  let [emailError, setEmailError] = useState();
  let [passwordError, setPasswordError] = useState();

  const { token } =  useGlobalState();

  if(token != "" && token != "null" && token != null){
    window.location.href = 'http://localhost:5173/ShowContext';
 }

  const sendDataToAPI = async () => {
    const data = {
      username: getUsersData('username'),
      password: getUsersData('password'),
      email: getUsersData('email'),
    };


    if(data.username.includes(" ") || data.username.trim() == ""){
      setUsernameError("Niepoprawna nazwa!");
    }else{
      setUsernameError("");
    }

    if(!data.email.includes("@") && !data.email.includes(".")){
      setEmailError("Niepoprawny email!");
    }else{
      setEmailError("");
    }

    if(data.password.trim() == ""){
      setPasswordError("Hasło nie może być puste!");
    }else{
      setPasswordError("");
    }



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
      const result = await response.json();

      if (!response.ok) {
        console.log(result)
        throw new Error('Network response was not ok');
      }

      window.location.href = 'http://localhost:5173/'
    } catch (error) {
      //console.log(result)
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
      <p className="header-text">Rejestracja</p>
        <form action="" method="post">
          <label htmlFor="username">Nazwa użytkownika</label>
          <input name="username" type="text" />
          <p className="error-message">{usernameError}</p>
          <label htmlFor="email">Email</label>
          <input name="email" type="text" />
          <p className="error-message">{emailError}</p>
          <label htmlFor="password">Hasło</label>
          <input name="password" type="password" />
          <p className="error-message">{passwordError}</p>
        </form>
        <button className="form-button" type='button' onClick={() => handleSendButton()}>Wyślij</button>     
        <p className="login-form"> <Link to="/"> Masz konto? Zaloguj się</Link></p>   
      </div>
    </>
  );
}
