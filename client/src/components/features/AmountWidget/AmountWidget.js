import { useState } from 'react';
import styles from './AmountWidget.module.scss';

const AmountWidget = (tourId) => {

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity < 6) {
        setQuantity(prevQuantity => prevQuantity + 1);
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  }

  return (
    <div className={styles.widgetContainer}>
      <button onClick={decreaseQuantity}>-</button>
      <input 
        type="number" 
        value={quantity} 
        readOnly 
        className={styles.quantityInput}
      />
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default AmountWidget;
