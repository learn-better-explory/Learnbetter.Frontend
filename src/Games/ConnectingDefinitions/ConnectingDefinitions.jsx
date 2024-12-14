import { useEffect, useState } from 'react'
import styles from './ConnectingDefinitions.module.css'

export default function ConnectingDefinitions(){

    let defButtons;
    let selectedDefButton;

    useEffect(()=>{

        defButtons = Array.from(document.getElementsByName('defButton'))
    })

    function handleDefButtonClick(e){
        
        defButtons.forEach((el) => {el.style = 'background-color: #F2F2F2;'})
        selectedDefButton = e.target;
        selectedDefButton.style = "background-color: grey;" 
    }

    function handleAnswerButtonClick(e){

        if(e.target.innerHTML == selectedDefButton.innerHTML){
            e.target.style = 'background-color:rgb(78, 248, 35);'
            selectedDefButton.style = 'background-color:rgb(78, 248, 35);'

            const index = defButtons.indexOf(selectedDefButton);
            defButtons.splice(selectedDefButton, 1)
        }
    }

    return(
        <div id={styles.container}>
            <table>
                <tbody>
                    <tr>
                        <td className={styles.td}>
                            <div className={styles.clickElement} name='defButton' onClick={(e) => {handleDefButtonClick(e)}}>1</div>
                        </td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>
                            <div className={styles.clickElement} name='answerButton' onClick={(e) => {handleAnswerButtonClick(e)}}>2</div>
                        </td>                        
                    </tr>

                    <tr>
                        <td className={styles.td}>
                            <div className={styles.clickElement} name='defButton' onClick={(e) => {handleDefButtonClick(e)}}>2</div>
                        </td>
                        <td className={styles.td}></td>
                        <td className={styles.td}>
                            <div className={styles.clickElement} name='answerButton' onClick={(e) => {handleAnswerButtonClick(e)}}>1</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}