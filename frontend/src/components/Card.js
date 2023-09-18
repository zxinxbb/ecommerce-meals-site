//import { Link } from "react-router-dom"

const Card = ({ item, deleteHandler }) => {
    
    return (
        <div>
            <h3>{item.text}</h3>
            <img src= {item.image} alt = {item.text} width = "25%"></img>
             <h3>Price: £{item.price}{console.log(item.price)}</h3> 
            <button onClick={() => deleteHandler(item)}>Remove Item</button>
            {/* <Link
            to={`/${item._id}`}
            >
                Alter Selection
            </Link> */}
        </div>
    )
}

export default Card