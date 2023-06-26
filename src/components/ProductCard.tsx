import { Product } from '../../typings.ts';
import { useProducts } from '../context/Context.tsx';

const ProductCard = ({ name, idName, image, desc, price, korName, korDesc }: Product) => {
    const { addToCart, langEng } = useProducts();

    const handleClick = () => {
      // let uniqueId = Math.random().toFixed(0) * 10;

       // add another prop to distinguish individual items 
        const product = { name, idName, image, desc, price, korName, korDesc };
        addToCart(product);
    }

    return (
    <div className="card" id={idName}>
            <img src={image} className="card-img-top" alt="..." />
            <h3 className="card-title text-center pt-4">{langEng ? name : korName}</h3>
            <div className="card-body d-flex flex-column">
                <h5 className='text-center'>${price}</h5>
                <p className='text-center'>{langEng ? desc : korDesc}</p>
                <button className='btn btn-light btn-md pt-2 pb-1 fw-bold btn-outline-success' onClick={handleClick}>{langEng ? 'Add to Cart' : '구매하기'}</button>
            </div>
    </div>
    )
}

export default ProductCard;