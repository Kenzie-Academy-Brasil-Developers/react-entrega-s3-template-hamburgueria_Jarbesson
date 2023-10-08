import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList,  addProduct,}) => {
   return (
      <ul className={styles.listCard}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product}  addProduct={ addProduct}/>
         ))}
      </ul>
   );
};
