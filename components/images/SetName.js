import 'bootstrap/dist/css/bootstrap.min.css';

class AcionaButton extends React.Component {
    render () {
      const { onCustomClick, ...props } = this.props
      return <a {...props} onClick={this.handleClick} />
    }
  
    handleClick = event => { 
      if (this.props.onCustomClick) {
        this.props.onCustomClick(event)
      }
      if (this.props.onClick) {
        this.props.onClick(event)
      }
    }
}
  
export default function SetName({ setName }) {
    return (
        <div>
            <label for="nameUser">Favor digitar seu nome:</label>
            <input class="form-control" id="nameUser" placeholder="Seu nome"></input>

            <AcionaButton onClick={() => 
                    document.getElementById("centerCabecalho").textContent = "Seja bem vindo " + document.getElementById("nameUser").value + "!" 
                }
            >
                <button class="btn btn-primary marginTop15">Ok</button>
            </AcionaButton>
        </div> 
    )
}