import '../../css/style.css';

const AboutUs = () => {

    return(
        <main className="aboutUs">
            <section className="us" >
                <div className="description">
                    <h3>¿Quiénes somos?</h3>
                    <strong>
                        Somos Uma, Pablo y Mary.
                    </strong>
                    <p>
                        Nuestro emprendimiento nace allá por el 2020 por gusto propio. En un primer 
                        momento nos enfocamos en el armado y venta de mantas, pero este último tiempo hemos expandido nuestra variedad
                        de artículos. Amamos y disfrutamos lo que hacemos. Gracias por elegirnos, sin el apoyo de ustedes esto no sería 
                        posible.
                    </p>
                </div>
                <div className="img">
                    <img src={"./nosotros.jpg"} alt="modelo"/>
                </div>
            </section>
            <section className="phrase">
                <span>¡Abundancia de todo aquello que nos haga feliz!</span>
            </section>
	    </main>
    )
}

export default AboutUs;