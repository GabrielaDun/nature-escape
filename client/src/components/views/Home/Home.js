//import Categories from '../Categories/Categories';
//import FollowUs from '../FollowUs/FollowUs';
// import Map from '../Map/Map';
import Offer from '../Offer/Offer';
import Quote from '../Quote/Quote';
import SliderAndSearch from '../SliderAndSearch/SliderAndSearch';
//import styles from './Home.module.scss'

const Home = () => {
    const imageUrlOne = `${process.env.PUBLIC_URL}/photos/quotes/1.jpg`;
    // const imageUrlTwo = `${process.env.PUBLIC_URL}/photos/quotes/2.jpg`; 

    // for future: < Quote title={'Make new friends'} subtitle={'PEOPLE & ANIMALS'} image={imageUrlTwo}/>
    return (
        <div>
            < SliderAndSearch />
            < Offer />
            < Quote title={'Enjoy the wildness'} subtitle={'MONTIANS'} image={imageUrlOne} />
        </div>
    );
};

export default Home;