import { ProductInCart } from '../../typings.ts';
import { useProducts } from '../context/Context.tsx';

const ProductCard = ({ name, image, korName, quantity, totalItemPrice }: ProductInCart) => {
    const { langEng } = useProducts();

    return (
        <div id="mini-card" className="card w-100 mb-2">
            <div className='row g-0 w-100'>
                <div className='col-md-4 py-2'>
                    <img src={image} className="mini-img img-thumbnail" alt="tea item" />
                    <div className="text-center fs-4 pt-2">{langEng ? name : korName}</div>
                </div>
                <div className='col-md-8 p-4'>
                    <div id="mini-card-body" className="d-flex flex-column align-items-center align-items-md-end justify-content-center">
                        <p>Price: ${totalItemPrice}</p>
                        <p>Quantity: {quantity}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;