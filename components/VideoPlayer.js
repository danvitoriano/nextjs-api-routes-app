import React from 'react';
import ReactPlayer from "react-player";
import styles from '../styles.module.css'


export  default function VideoPlayer(){
    return (
        <div className={styles.container}>
            <div className={styles.center} >
          <h3>Star Wars - Space Opera </h3>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=HwL6f6FG04w"
          />
        </div>
        </div>
      )
}