 import React from 'react';
import { Rating } from '../../node_modules/@bit/primefaces.primereact.rating';
import PrimereactStyle from '../../node_modules/@bit/primefaces.primereact.internal.stylelinks';



class Example extends React.Component {
	constructor() {
		super();
		this.state = {
			val1: null,
			val2: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleSubmit(event) {
		alert('Sua avaliação foi enviada.');
		window.history.back();
		window.history.back();
	  }

	render() {
		return (
			<div>
				<PrimereactStyle />
				<div className='content-section introduction'>
					<div className='feature-intro'>
						<h1>Avalie todos os filmes dos Star Wars</h1>
						<p>Dê sua nota conforme sua opinião sobre os filmes da saga Star Wars:</p>
					</div>
				</div>

				<div className='content-section implementation'>
					 
				<form onSubmit={this.handleSubmit}>
					<h3>Episódio I: A Ameaça Fantasma (1999) {this.state.val1}</h3>
					<Rating
						value={this.state.val1}
						cancel={false}
						onChange={e => this.setState({ val1: e.value })}
					/>
					<h3>Episódio II: Ataque dos Clones (2002) {this.state.val2}</h3>
					<Rating
						value={this.state.val2}
						cancel={false}
						onChange={e => this.setState({ val2: e.value })}
					/>
					<h3>Episódio III: A Vingança dos Sith (2005) {this.state.val3}</h3>
					<Rating
						value={this.state.val3}
						cancel={false}
						onChange={e => this.setState({ val3: e.value })}
					/>
					<h3>Episódio IV: Uma Nova Esperança (1977) {this.state.val4}</h3>
					<Rating
						value={this.state.val4}
						cancel={false}
						onChange={e => this.setState({ val4: e.value })}
					/>
					<h3>Episódio V: O Império Contra-Ataca (1980) {this.state.val5}</h3>
					<Rating
						value={this.state.val5}
						cancel={false}
						onChange={e => this.setState({ val5: e.value })}
					/>
					<h3>Episódio VI: O Retorno do Jedi (1983) {this.state.val6}</h3>
					<Rating
						value={this.state.val6}
						cancel={false}
						onChange={e => this.setState({ val6: e.value })}
					/>
					<h3>Episódio VII: O Despertar da Força (2015) {this.state.val7}</h3>
					<Rating
						value={this.state.val7}
						cancel={false}
						onChange={e => this.setState({ val7: e.value })}
					/>
					<h3>Episódio VIII: Os Últimos Jedi (2017) {this.state.val8}</h3>
					<Rating
						value={this.state.val8}
						cancel={false}
						onChange={e => this.setState({ val8: e.value })}
					/>
					<h3>Episódio IX: A Ascensão Skywalker (2019) {this.state.val9}</h3>
					<Rating
						value={this.state.val9}
						cancel={false}
						onChange={e => this.setState({ val9: e.value })}
					/>
					<input type="submit" value="Enviar" />
					</form>
				</div>
			</div>
		);
	}
}
export default () => {
    return  <Example />;
    }

