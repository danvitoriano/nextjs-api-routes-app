import styles from '../styles.module.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

// export  default function Enquete(){

//     return (
//         <div className={styles.container}>
//             <div className={styles.center} >
//                 <h2>Você gosta de Star Wars?</h2>
//                 <input type="radio" id="sim" name="optionStar" value="sim"/>
//                 <label>SIM</label><br></br>
//                 <input type="radio" id="nao" name="optionStar" value="nao" />
//                 <label>NÃO</label>
//                 <image id="myImg" />
//                 <div id="divImg"></div>
//             </div>
//         </div>
//     )

// }

class Enquete extends Component {
    state = {
        fullname: '',
        img: '',
        widthValue : 0,
        heightValue: 0,
    }

    stateChange = (f) => {
        const { name, value } = f.target;
        this.setState({
            [name]: 'Seja bem vindo, ' + value + ' !',
        });
    }

    clickedYes = ()=>{
        this.setState({
            img: 'https://i.redd.it/d6c31tu44v851.jpg',
            widthValue: '450px',
            heightValue: '450px'
        });
    }

    clickedNo = (f)=>{
        this.setState({
            img: 'https://i.imgflip.com/3tt1qp.jpg',
            widthValue: '450px',
            heightValue: '450px'
        });
    }

    render() {
        return (
            <div className={styles.container}>
             <div className={styles.center} >
                 <h2>Você gosta de Star Wars?</h2>
                 <input type="radio" id="sim" name="optionStar" value="sim" onClick={this.clickedYes}/>
                 <label>SIM</label><br></br>
                 <input type="radio" id="nao" name="optionStar" value="nao" onClick={this.clickedNo}/>
                 <label>NÃO</label>
                 <img src={this.state.img} width={this.state.widthValue} height={this.state.heightValue}/>
             </div>
         </div>
        );
    }
}

export default Enquete;
