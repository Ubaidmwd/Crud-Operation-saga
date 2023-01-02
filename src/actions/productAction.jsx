import {Product_List,Product_Search,Product_Delete,Product_Add,Product_Update} from "../constant/constant"

export const productlist=()=>{
    

    return{
        type:Product_List    
        
    }
}
export const productsearch=(query)=>{
    

    return{
        type:Product_Search,
        query   
        
    }
}
export const productdelete=(id)=>{
    

    return{
        type:Product_Delete,
        id   
        
    }
}

export const productadd=(pdata)=>{
    
    return{
        type:Product_Add,
        pdata:pdata   
        
    }
}
export const productupdate=(data)=>{
    

    return{
        type:Product_Update,
        data   
        
    }
}