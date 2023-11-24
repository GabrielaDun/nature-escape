import { useSelector } from 'react-redux';
import { getTourById } from '../../../redux/toursRedux';
import styles from './CheckoutBox.module.scss';
import { CalculeteDownPayment } from '../../../utils/CalculeteDownPayment';
import { getOrderByTourId } from '../../../redux/cartRedux';

const CheckoutBox = ({tourId, quantity}) => {
  const tourData = useSelector(state => getTourById(state, tourId))

  const orderData = useSelector(state => getOrderByTourId(state, tourId))
  console.log(orderData);

  const downPayment = CalculeteDownPayment(tourData.price)
  const singleItemTotalPrice = quantity * downPayment;



  const image = `${process.env.PUBLIC_URL}/photos/tours/${tourData.url}/main.jpg`
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.product}>
          <div className={styles.x}>
          </div>
          <img 
            className={styles.image}
            alt={tourData.title}
            src={image}
          />
          <div className={styles.title}>{tourData.title}</div>
        </div>
        <div className={styles.price} ><p>${tourData.price}</p></div>
        <div className={styles.downPayment}><p>${downPayment}</p></div>
        <div className={styles.amount}>{quantity}</div>
        <div className={styles.total}><p>${singleItemTotalPrice}</p></div>
      </div>
    </div>
  );
}
export default CheckoutBox;