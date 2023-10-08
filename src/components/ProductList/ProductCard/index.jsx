import styles from"./styles.module.scss";
export const ProductCard = ({ product, addProduct, }) => {
   
    return(
        <li className="cards">
  
            <div>
            <img src={product.img} alt={product.name} />
            </div>
           
            <div className={styles.list_card}>
                <h3 className="Heading1 Heading3" >{product.name}</h3>
                <span className="Caption ">{product.category}</span>
                <span className="Body Body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="btn" onClick={() => addProduct(product)}>Adicionar</button>
            </div>
        </li>
    )
}


