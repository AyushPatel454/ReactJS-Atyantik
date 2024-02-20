import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity; 
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
    <header id="main-header">
        <div id="title">
            <img src={logoImg} alt="logo-image" />
            <h1>ReactFood</h1>
        </div>

        <nav>
            <Button textOnly={true} onClick={handleShowCart}>Cart ({totalItems})</Button>
        </nav>
        
      
    </header>
  );
}