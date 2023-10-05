import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { lancheApi } from "../../services/api";

export const HomePage = () => {
   const localProducts = localStorage.getItem("@PRODUCTS")

   const [productList, setProductList] = useState(localProducts ? JSON.parse(localProducts) : [] );
   console.log(productList)

   const [cartList, setCartList] = useState([]);

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const getProduct = async () =>{
         try {
            const {data} = await lancheApi.get("/products");
            setProductList(data);
         } catch (error) {
            return error
         }
      }
      getProduct()
   },[])

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   useEffect(()=>{
      localStorage.setItem("@PRODUCTS", JSON.stringify(productList));
   },[productList])
   

   // adição, exclusão, e exclusão geral do carrinho
   const addProduct = (product) => {
      const newProduct =  ([...cartList, product])
         setCartList(newProduct)
   }

   const removeProduct = (product) =>{
      const newProduct = cartList.filter((list) => list.id !== product.id)
      setCartList(newProduct)
   }

   
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} addProduct={addProduct}/>
            <CartModal cartList={cartList} removeProduct={removeProduct}/>
         </main>
      </>
   );
};
