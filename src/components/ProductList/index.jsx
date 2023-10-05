import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList,  addProduct,}) => {
   return (
      <ul>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product}  addProduct={ addProduct}/>
         ))}
      </ul>
   );
};
