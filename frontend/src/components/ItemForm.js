import { useEffect, useState } from "react"
import { Form } from "react-router-dom"
import { useItemsContext } from "../hooks/useItemsContext";


const ItemForm = ()=>{
    const {dispatch} = useItemsContext()

    const[title,setTitle] = useState('')
    const[brand,setBrand] = useState('')
    const[price,setPrice] = useState('')
    const[imgPath1,setImgPath1] = useState('')
    const[imgPath2,setImgPath2] = useState('')
    const[error,setError] = useState(null)
    const[emptyFields,setEmptyFields] = useState([])
    // const[date,setDate] = useState('')

    const handleSubmit = async (event) =>{
        event.preventDefault()

        const item = {title,price,brand,imgPath1,imgPath2}

        const response = await fetch('/api/items',{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok){
            setEmptyFields([])
            setError(null)
            setTitle('')
            setBrand('')
            setPrice('')
            console.log("New item added")
            dispatch({type:'CREATE_ITEM',payload:json})
        }
    }
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add new Item</h3>

            <label>Item Title:</label>
            <input
             type="text"
             onChange={(event)=>setTitle(event.target.value)}
             value={title}
             className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Item Brand:</label>
            <input
             type="text"
             onChange={(event)=>setBrand(event.target.value)}
             value={brand}
             className={emptyFields.includes('brand') ? 'error' : ''}
            />

            <label>Item Price:</label>
            <input
             type="number"
             onChange={(event)=>setPrice(event.target.value)}
             value={price}
             className={emptyFields.includes('price') ? 'error' : ''}
            />

            <label>Item image 1(URL):</label>
            <input
             type="text"
             onChange={(event)=>setImgPath1(event.target.value)}
             value={imgPath1}
             className={emptyFields.includes('imgPath1') ? 'error' : ''}
            />

            <label>Item image 2(URL):</label>
            <input
             type="text"
             onChange={(event)=>setImgPath2(event.target.value)}
             value={imgPath2}
             className={emptyFields.includes('imgPath2') ? 'error' : ''}
            />

            <button>Add Item</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ItemForm