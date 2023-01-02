import {  Set_Product,Product_Add_Sucess} from "../constant/constant"
let initialstate=[]

export const productData = (data = initialstate, action) => {
    switch (action.type) {
        case Set_Product:
            
            return [...action.payload]
        case Product_Add_Sucess:
            
            return [...data,action.payload]

       
             
        default:return data;
    }
}
