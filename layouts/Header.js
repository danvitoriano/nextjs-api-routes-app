
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">
                <img
                    alt=""
                    src="/images/logo.png"
                    width="50"
                    height="30"
                    className="d-inline-block align-top"
                    style={{ filter: 'invert(100%)' }}
                />{' '}
                Modern Web
            </Navbar.Brand>
        </Navbar>
    )
}

export default Header;