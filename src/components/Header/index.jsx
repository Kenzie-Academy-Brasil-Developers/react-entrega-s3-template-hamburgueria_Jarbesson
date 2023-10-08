import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./styles.module.scss";

export const Header = ({ setIsOpenModal, filterCard, countProduct }) => {
   const [value, setValue] = useState("");

   const submit = (e) =>{
      e.preventDefault();
      filterCard(value);
   }

   return (
      <header className={styles.HeaderBox}>
        <div className={`container ${styles.header_container}`}>
        <img src={Logo} alt="Logo Kenzie Burguer" />
         <div className={styles.div_second}>
               
            <button className={styles.button_span} onClick={() => setIsOpenModal(true)} >
               <MdShoppingCart size={21} />
               <span>{countProduct}</span>
            </button>
         </div>
        </div>

        <div>
        <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit" onClick={submit}>
                  <MdSearch size={21} />
               </button>
            </form>
        </div>        
      </header>
   );
};
