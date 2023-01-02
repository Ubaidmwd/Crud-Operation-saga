import { toast } from "react-toastify";
import {useState} from 'react'


import {takeEvery,put,takeLatest} from "redux-saga/effects"
import { Product_List,
    Set_Product,
    Product_Search,
     Product_Delete,
     Product_Add,Product_Add_Sucess,Product_Update}
                            from "../constant/constant"


function* getProducts() {
    
    
    let data = yield fetch('http://localhost:3000/products');
    data = yield data.json();
    

    console.warn("action is called", data)
    yield put({type:Set_Product,payload:data})
}
function* searchProducts(data) {
    let result= yield fetch(`http://localhost:3000/products?q=${data.query}`);
    result = yield result.json();
    console.warn("Search action is called", result)
    yield put({type:Set_Product,payload:result})
}
function* deleteProducts(id) {
    let deldata= yield fetch(`http://localhost:3000/products/${id.id}`,{method:'DELETE'});
    console.warn("Delete action is called===", deldata)
    deldata = yield deldata.json();
    toast.success("Product Delete Successfully");
    yield getProducts()
}
function* addProducts(pdata) {
    pdata=pdata.pdata
    console.log("padata is====",pdata)

    // let {id, category, price, rate, count} = pdata
    // console.log("category",category)
    let add= yield fetch(`http://localhost:3000/products/`,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(pdata)
    
    });
    toast.success("Product Add Successfully");
    yield getProducts()
    

   
}
function* updateProducts(data) {
    data=data.data
    console.log("padata is====",data)
    let {id} = data
    // console.log("category",category)
    let add= yield fetch(`http://localhost:3000/products/${id}`,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    
    });
    toast.success("Product Update Successfully");
    yield getProducts()
    

   
}
function* productSaga(){
    yield takeEvery(Product_List,getProducts);
    yield takeEvery(Product_Search,searchProducts);
    yield takeEvery(Product_Delete,deleteProducts);
    yield takeLatest(Product_Add,addProducts);
    yield takeLatest(Product_Update,updateProducts);




}

export default productSaga;