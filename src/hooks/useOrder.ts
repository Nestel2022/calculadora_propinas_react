import { useState } from "react"
import { IOrderItem } from "../interfaces"

export default function useOrder(){
    const [order, setOrder] = useState<IOrderItem[]>([])

    const addItem = () => {
        console.log('Agregando ..........');
        
    }


    return{
        addItem
    }
}