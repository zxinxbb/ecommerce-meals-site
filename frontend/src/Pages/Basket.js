import { useEffect, useState } from "react";
import { getItems } from "../getItems";
import Card from '../components/Card'
import { deleteItem } from "../deleteItem";
const Basket = () => {
    const [items, setItems] = useState([])


    const deleteHandler = async (item) => {
        let response = await deleteItem(item)
        console.log(response)
        let updated= [...items]
        updated = updated.filter(items=> items._id !== response._id)
        setItems(updated)
    }
    useEffect(() => {
        const fetchItems = async () => {
            let data = await getItems()
            setItems(data.items)
            //console.log(data.message)
           
          
        }
        fetchItems()
    }, [])
   let totalPrice = 0;
   for(let i = 0; i<items.length;i++){
   totalPrice += items[i].price;
   
   // console.log(totalPrice += items[i].price)
   }

    if (!items) return <h1>loading...</h1>
    return (
        
        <div className="items">
            <>
                {
                    items ? items.map((item) => <Card key={item._id} deleteHandler={deleteHandler} item={item}/>)
                        : <p>loading...</p>
                        
                }
            </>  <h1>Total: £{totalPrice}</h1>
   
        </div>
   
    );

            }
    

export default Basket