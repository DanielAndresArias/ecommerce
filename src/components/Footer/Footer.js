import '../../css/style.css';
import { Link } from 'react-router-dom';

const Footer = () =>{

    return (
        <footer className="footer">
            <div className="div">
                <section className="section">
                    <p className="p">Copyright © 2020-2022 MantasXL.Deco</p>
                </section>
        
                <section className="section">
                    <div className="icons">
                        <div className="img correo-electronico">
                            <Link to="#"><img src="/correo-electronico.png"/></Link>
                        </div>
        
                        <div className="img instagram">
                            <Link to="#"><img src="/instagram.png"/></Link>
                        </div>
        
                        <div className="img telegram">
                            <Link to="#"><img src="/telegram.png"/></Link>
                        </div>
        
                        <div className="img whatsapp">
                            <Link to="#"><img src="/whatsapp.png"/></Link>
                        </div>
                    </div>
                </section>
            </div>
	    </footer>
    )
}

export default Footer;