import Item from "../Item/Item";

const ItemList = (props) => {

    return(
        props.products.map((product) => <Item key={product.id} {...product}/>)
    )
}

export default ItemList;