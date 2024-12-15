import { createElement, useEffect, useState } from 'react'
import styles from './ConnectingDefinitions.module.css'
import {clone, shuffle} from "../../Utils";

export default function ConnectingDefinitions(){


    const wordData = [
        {
            wordId: 0,
            word: "Dzik",
            wordDescription: "Dzik jest dziki"
        },
        {
            wordId: 1,
            word: "Śmierć Piłsudzkiego",
            wordDescription: "12.05.1935"
        }
    ]

    function getWordId(element){
        return element.attributes.getNamedItem("wordid").nodeValue;
    }

    let defButtonsEl;
    let anwserButtonsEl;
    let selectedDefButton;
    const defaultBackgroundColor = "#F2F2F2";
    const clickedBackgroundColor = "grey";
    const correctBackgroundColor = "#4ef823";
    const incorrectBackgroundColor = "#f72525";

    useEffect(()=>{
        defButtonsEl = Array.from(document.getElementsByName('defButton'));
        anwserButtonsEl = Array.from(document.getElementsByName('answerButton'));
    })

    function handleDefButtonClick(e){
        
        if(!defButtonsEl.includes(e.target)){
            return;
        }
    
        defButtonsEl.forEach((el) => {el.style = `background-color: ${defaultBackgroundColor};`})
        anwserButtonsEl.forEach((el) => {el.style = `background-color: ${defaultBackgroundColor};`})

        if(selectedDefButton != e.target){
            selectedDefButton = e.target;
            selectedDefButton.style = `background-color: ${clickedBackgroundColor};`
        }else{
            selectedDefButton = null;   
        }
    }

    function handleAnswerButtonClick(e){

        if(selectedDefButton == null){
            return;
        }

        if(getWordId(e.target) == getWordId(selectedDefButton)){
            e.target.style = `background-color: ${correctBackgroundColor};`
            selectedDefButton.style = `background-color:${correctBackgroundColor};`

            const indexDef = defButtonsEl.indexOf(selectedDefButton);
            const indexAnwser = anwserButtonsEl .indexOf(e.target);
            defButtonsEl.splice(indexDef, 1);
            anwserButtonsEl.splice(indexAnwser, 1);
        }else{
            e.target.style = `background-color: ${incorrectBackgroundColor};`
            selectedDefButton.style = `background-color:${incorrectBackgroundColor};`
        }
        selectedDefButton = null;
    }

    function DefButton(props){
        return(
            <td className={styles.td}>
                <div className={styles.clickElement} name='defButton' wordid={props.wordid} onClick={(e) => {handleDefButtonClick(e)}}>{props.word}</div>
            </td>
        )
    }

    function AnwserButton(props){
        return(
            <td className={styles.td}>
                <div className={styles.clickElement} name='answerButton' wordid={props.wordid} onClick={(e) => {handleAnswerButtonClick(e)}}>{props.word}</div>
            </td>
        )
    }

    function TrBody(props){
        return(
            <tr>
                <DefButton wordid={props.wordid1} word={props.word}></DefButton>
                <AnwserButton wordid={props.wordid2} word={props.anwser}></AnwserButton>
            </tr>
        )
    }

    function TableBody(){
        let words = clone(wordData);
        let wordDefintions = [];
        let wordAnwsers = [];

        for(let i=0; i < words.length; i++){
            let word = words[i];
            wordDefintions.push({
                wordId: word.wordId,
                value: word.word
            });

            wordAnwsers.push({
                wordId: word.wordId,
                value: word.wordDescription
            });
        }

        wordDefintions = shuffle(wordDefintions);
        wordAnwsers = shuffle(wordAnwsers);

        return (
            Array.from({length: words.length}, (_, index) => <TrBody key={wordDefintions[index].value + wordAnwsers[index].value} wordid1={wordDefintions[index].wordId} wordid2={wordAnwsers[index].wordId} 
            word={wordDefintions[index].value} anwser={wordAnwsers[index].value} />)
        )
    }


    return(
        <div id={styles.container}>
            <table>
                <tbody>
                    <TableBody></TableBody>
                </tbody>
            </table>
        </div>
    )
}