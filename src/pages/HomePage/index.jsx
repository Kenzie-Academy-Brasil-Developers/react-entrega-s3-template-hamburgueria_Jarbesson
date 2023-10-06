import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { lancheApi } from "../../services/api";

export const HomePage = () => {
   
   const [productList, setProductList] = useState([]);
   
   const localProducts = localStorage.getItem("@CARTLIST")

   const [cartList, setCartList] = useState(localProducts ? JSON.parse(localProducts) : []);

   const [isOpenModal, setIsOpenModal] = useState(false);

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
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
   },[cartList])
   

   // adição, exclusão, e exclusão geral do carrinho
   const addProduct = (product) => {
      const newProduct =  ([...cartList, product]);
         setCartList(newProduct);
   }

   const removeProduct = (product) =>{
      const newProduct = cartList.filter((list) => list.id !== product.id);
      setCartList(newProduct)
   }

   const removeTotalProduct = () =>{
      setCartList([])
   } 
   
   // renderizações condições e o estado para exibir ou não o carrinho


   // filtro de busca
   const filterCard = (product) =>{
      const findCard = productList.filter((card) => card.name === product);
      setProductList(findCard)

   }
   // estilizar tudo com sass de forma responsiva



   return (
      <>
         <Header setIsOpenModal={setIsOpenModal}  filterCard={ filterCard }/>
         <main>
            <ProductList productList={productList} addProduct={addProduct}/>
            {isOpenModal ?  <CartModal cartList={cartList} removeProduct={removeProduct}  removeTotalProduct={ removeTotalProduct} setIsOpenModal={setIsOpenModal}/> : null}
           
         </main>
      </>
   );
};
