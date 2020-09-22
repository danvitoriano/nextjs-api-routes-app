
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './../layouts';

export default ({ Component, pageProps }) => {
    return ( 
        <>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}