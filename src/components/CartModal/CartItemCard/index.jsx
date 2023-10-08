import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";
export const CartItemCard = ({ product, removeProduct, }) => {
   return (
      <li className={`${styles.cards} padding`}>
         <div className={styles.div_first}>
            <img src={product.img} alt={product.name} />
            <div>
            <h3>{product.name}</h3>
            <p className="Body Body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
            </div>     
         </div>
         <button className={styles.button_trash} aria-label="delete" title="Remover item" onClick={() => removeProduct(product)}> 
            <MdDelete size={21} />
         </button>
      </li>
   );
};

