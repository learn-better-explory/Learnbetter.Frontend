import { useGlobalState } from "./context";

function LogOutButton(){

    let {token, setToken, id, setId} = useGlobalState();
    
    console.log(token == null);
    console.log(token == "");

    if(token != null && token != "null" && token != ""){
        return (
            <button onClick={ () => {
                setToken(null); 
                setId(null); 
                window.location.href = 'http://localhost:5173/';
                } }>Wyloguj się</button>
        )
    }
    return ( <p></p>);
}

function Header(){
    return(
        <div id='header'>
            Learn Better!
            <LogOutButton />
        </div>
    )
}
export default Header