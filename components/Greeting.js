import React, { Component } from 'react';
import styles from '../styles.module.css'

class Greeting extends Component {
    state = {
        fullname: '',
    }

    stateChange = (f) => {
        const { name, value } = f.target;
        this.setState({
            [name]: 'Seja bem vindo, ' + value + ' !',
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.center} >
                    <h2 htmlFor="fullname"> Qual o seu nome? </h2>
                    <input type="text" name="fullname" onChange={this.stateChange} />
                    <h4>{this.state.fullname}</h4>
                </div>
            </div>
        );
    }
}

export default Greeting;