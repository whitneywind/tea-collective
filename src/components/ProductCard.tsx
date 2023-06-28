import { useState, useEffect } from 'react';
import { Product } from '../../typings.ts';
import { useProducts } from '../context/Context.tsx';

const ProductCard = ({ name, idName, image, desc, price, korName, korDesc, quantity, totalItemPrice }: Product) => {
    const { addToCart, langEng } = useProducts();
    const [addedToCart, setAddedToCart] = useState(false);

    const handleClick = () => {
        setAddedToCart(true);
    
        const product = { name, idName, image, desc, price, korName, korDesc, quantity, totalItemPrice };

        addToCart(product)
      };
    
      useEffect(() => {
        if (addedToCart) {
            setAddedToCart(true);
        }
      }, [addedToCart]);

    return (
    <div className="card" id={idName}>
            <img src={image} className="card-img-top" alt="..." />
            <h3 className="card-title text-center pt-4">{langEng ? name : korName}</h3>
            <div className="card-body d-flex flex-column">
                <h5 className='text-center'>${price}</h5>
                <p className='text-center'>{langEng ? desc : korDesc}</p>
            <button
            className={`btn btn-md pt-2 pb-1 fw-bold btn-outline-success ${
                addedToCart ? 'btn-added' : ''
              }`}
            onClick={handleClick}>
            {addedToCart
                ? langEng
                ? 'Added to Cart'
                : '추가했습니다'
                : langEng
                ? 'Add to Cart'
                : '구매하기'}
            </button>
            </div>
    </div>
    )
}

export default ProductCard;