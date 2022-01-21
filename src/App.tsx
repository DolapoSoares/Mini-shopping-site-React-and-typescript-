 import { useState } from "react";
 import { useQuery } from "react-query";

 //Components
 import { Drawer } from "@material-ui/core";
 import { LinearProgress } from "@material-ui/core";
 import { Grid } from "@material-ui/core";
 import { AddShoppingCart } from "@material-ui/icons";
 import { Badge } from "@material-ui/core";

 //styles
 import { Wrapper } from "./App.styles";

export type CartGoodsType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number
}


 const getGoods = async (): Promise<CartGoodsType[]> => {
   return await (await fetch('http://fakestoreapi.com/products')).json();
 }

const App = ()  => {

    const {data ,isLoading, error } = useQuery<CartGoodsType[]>('products' , getGoods)
    console.log(data)

    const getTotalItems = () => null

    const addToCart = (clicked : CartGoodsType) => null

    const removeFromCart = () => null

    if(isLoading) return <LinearProgress />
    if(error) return <div>Something is wrong...</div>

    return <div className="App">
    </div>
  
}

export default App;
