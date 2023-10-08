import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import styles from "./style.module.scss";

export const CartModal = ({ cartList, removeProduct, removeTotalProduct, setIsOpenModal }) => {
   const total = cartList.reduce((prevValue, product,) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={styles.modalOverlay} role="dialog">
         <div className={styles.modalBox}>
            <div className={`${styles.div_first} padding`}>      
                  <h2>Carrinho de compras</h2>
                  <button className={styles.closeButton} aria-label="close" title="Fechar" onClick={() => setIsOpenModal(false)}>
                     <MdClose size={21} />
                  </button>         
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     < CartItemCard  key={product.id} product={product} removeProduct={removeProduct} removeTotalProduct={removeTotalProduct} />
                  ))}
               </ul>
            </div>
            <div className="padding">
               <hr />
               <div className={styles.div_second}>
                  <span className="Heading1 Headline">Total</span>
                  <span className="Body Body-600">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className={`${styles.button } btn`} onClick={removeTotalProduct}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};

