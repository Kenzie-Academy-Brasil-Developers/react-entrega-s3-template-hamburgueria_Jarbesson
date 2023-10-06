import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";

export const Header = ({ setIsOpenModal, filterCard }) => {
   const [value, setValue] = useState("");

   const submit = (e) =>{
      e.preventDefault()
      filterCard(value)
   }

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={() => setIsOpenModal(true)} >
               <MdShoppingCart size={21} />
               <span>0</span>
            </button>
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
