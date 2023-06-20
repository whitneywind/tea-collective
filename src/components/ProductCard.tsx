import { Product } from '../../typings.ts';
import { useProducts } from '../context/Context.tsx';

const ProductCard = ({ name, idName, image, desc, price, korName, korDesc }: Product) => {
    const { addToCart, langEng } = useProducts();
    // const [inCart, setInCart] = useState(false);

    // useEffect(() => {
    //     const productInCart = products.find((product) => product.name === name);

    //     if (productInCart) {
    //         setInCart(true);
    //     } else {
    //         setInCart(false);
    //     }
    // }, [products, name]);

    const handleClick = () => {
      // let uniqueId = Math.random().toFixed(0) * 10;

       // add another prop to distinguish individual items 
        const product = { name, idName, image, desc, price, korName, korDesc };
        addToCart(product);
    }

    return (
    <div className="card" id={idName}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-title">{langEng ? name : korName}</div>
            <div className="card-body">
                <p>{langEng ? desc : korDesc}</p>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='my-auto'>${price}</h5>
                    <button className='w-fit btn btn-light btn-sm btn-outline-success' onClick={handleClick}>{langEng ? 'Add to Cart' : '구매하기'}</button>
                </div>
            </div>
    </div>
    )
}

export default ProductCard;