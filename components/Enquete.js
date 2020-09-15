import styles from '../styles.module.css'
import React from 'react'
import ReactDOM from 'react-dom';

export  default function Enquete(){

    return (
        <div className={styles.container}>
            <div className={styles.center} >
                <h2>Você gosta de Star Wars?</h2>
                <input type="radio" id="sim" name="optionStar" value="sim"/>
                <label>SIM</label><br></br>
                <input type="radio" id="nao" name="optionStar" value="nao" />
                <label>NÃO</label>
                <image id="myImg" />
                <div id="divImg"></div>
            </div>
        </div>
    )

}
