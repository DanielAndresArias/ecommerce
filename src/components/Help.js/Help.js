import '../../css/style.css';

const Help = () => {

    return(
		<main className="help">
			<h2 className="titleHelp">Preguntas frecuentes</h2>
			<article className="questions">
				<div className="box">
					<h3 className="question">¿Realizan envíos?</h3>
					<p className="answer">
						Actualmente poseemos envíos solamente para Córdoba Capital, Villa Allende y Villa Carlos Paz.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Las mantas se pueden pedir a medida?</h3>
					<p className="answer">
						Sí, se debe consultar por cualquiera de los medios de contacto del sitio
						para realizar un presupuesto y estimar una fecha de entrega.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Aceptan tarjetas de crédito?</h3>
					<p className="answer">
						Actualmente se aceptan todas las tarjetas de crédito. Se efectúa el pago a 
						través de Mercado Pago.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Que pasa si me arrepiento de la compra?</h3>
					<p className="answer">
						Cualquier compra concretada pero no entregada, puede cancelarse sin ningún 
						inconveniente comunicándose por cualquiera de los medios de contacto.
						En caso de haber recibido el producto, solo si este se encuentra en óptimas 
						condiciones se podrá reintegrar el dinero abonado, no así el valor del envío 
						de haberse utilizado este medio.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Poseen tienda física?</h3>
					<p className="answer">
						Por el momento solo disponemos de una tienda virtual, no siendo posible 
						mostrar los productos antes de su compra.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Las mantas nórdicas pueden lavarse?</h3>
					<p className="answer">
						Se desaconseja el lavado de las mantas en un lavarropas tradicional.
						Para más información puede acceder al siguiente <a href="./Consejos para que mantengas tu manta nórdica.pdf" target="_blank">enlace</a>.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Ofrecen envío gratuito?</h3>
					<p className="answer">
						En compras mayores a $10000 el envío es gratis para toda la región de Córdoba 
						Capital, Villa Allende y Villa Carlos Paz.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Que pasa si un producto llega dañado?</h3>
					<p className="answer">
						Si cualquiera de nuestros productos llegara dañado o en mal estado, siempre que 
						no se hubiese hecho un uso indevido del mismo, se podrá realizar el reclamo dentro 
						de las 72hs hábiles de entregado el producto con su posterior reintegro del valor abonado 
						junto con el valor del envío en caso que este se hubiese cobrado.
					</p>
				</div>

				<div className="box">
					<h3 className="question">¿Poseen seguimiento de envío?</h3>
					<p className="answer">
						¡Sí! Se contacta por mail para acordar la fecha de entrega y el rango horario de la 
						misma.
                    </p>
				</div>

				<div className="box">
					<h3 className="question">¿Que pasa si no me encuentro en el domicilio a la hora de la entrega?</h3>
					<p className="answer">
						En caso de no poder concretarse la entrega en el primer intento, se realizará un segundo intento. 
						De repetirse el inconveniente se retorna el producto a uno de los dos puntos de retiro.
                    </p>
                </div>
			</article>
			
		</main>
    )
}

export default Help;