import CartContext from '../../context/CartContext';
import { useContext, useState } from 'react';

const Checkout = () => {

    const { cart, clearCart, getTotalPrice, totalQuantity } = useContext(CartContext);

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[phone, setPhone] = useState("");
    const[adress, setAdress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El formulario se ha cargado con éxito")
        console.log(name, email, phone, adress);
    }

    return(
        <main className='checkout'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre completo:</label>
                <input 
                    type='text' 
                    id='name' 
                    required
                    onChange={(e) => setName(e.target.value)}
                    />
                <label htmlFor='email'>Email:</label>
                <input 
                    type='text' 
                    id='email' 
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <label htmlFor='phone'>Número de celular:</label>
                <input 
                    type='number' 
                    id='phone' 
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    />
                <label htmlFor='adress'>Dirección:</label>
                <input 
                    type='text' 
                    id='adress' 
                    required
                    onChange={(e) => setAdress(e.target.value)}
                    />
                <input type='submit' value='Enviar'/>
            </form>
        </main>
    )
}

export default Checkout;