import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { lancheApi } from "../../services/api";
import styles from "./styles.module.scss";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const HomePage = () => {

   const [productList, setProductList] = useState([]);

   const localProducts = localStorage.getItem("@CARTLIST");

   const [cartList, setCartList] = useState(localProducts ? JSON.parse(localProducts) : []);

   const [isOpenModal, setIsOpenModal] = useState(false);

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(() => {
      const getProduct = async () => {
         try {
            const { data } = await lancheApi.get("/products");
            setProductList(data);
         } catch (error) {
            return error
         }
      }
      getProduct()
   }, [])

   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   useEffect(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
   }, [cartList]);


   // adição, exclusão, e exclusão geral do carrinho
   const addProduct = (product) => {
      const hastCart = cartList.some((cart) => cart.id === product.id);
      if (!hastCart) {
         setCartList([...cartList, product]);
         toast.success("Produco adicionado.");
      }else{
         toast.error("Produto já existente no carrinho");
      }
        
   }

   const countProduct = cartList.length;

   const removeProduct = (product) => {
      const newProduct = cartList.filter((list) => list.id !== product.id);
      setCartList(newProduct);
      toast.success("Produto removido");
   }

   const removeTotalProduct = () => {
      setCartList([]);
      toast.success("Todos os produtos foram removidos");
   }

   // renderizações condições e o estado para exibir ou não o carrinho


   // filtro de busca
   const filterCard = (product) => {
      const findCard = productList.filter((card) => card.category === product);
      setProductList(findCard);

   }
   // estilizar tudo com sass de forma responsiva



   return (
      <>
         <Header countProduct={countProduct} setIsOpenModal={setIsOpenModal} filterCard={filterCard} />
         <main className={styles.container}>
            <ProductList productList={productList} addProduct={addProduct} />
            {isOpenModal ? <CartModal cartList={cartList} removeProduct={removeProduct} removeTotalProduct={removeTotalProduct} setIsOpenModal={setIsOpenModal} /> : null}
            <ToastContainer
               position="top-right"
               autoClose={5000}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
               theme="light"
            />
            {/* Same as */}
            <ToastContainer />
         </main>
      </>
   );
};
