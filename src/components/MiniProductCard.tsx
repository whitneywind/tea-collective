import { useProducts } from '../context/Context.tsx';
import { Product } from '../../typings.ts';

const ProductCard = ({ name, idName, image, desc, price, korName, korDesc, quantity, totalItemPrice }: Product) => {
    const { langEng, addToCart, removeFromCart, products } = useProducts();

    const product: Product = { name, idName, image, desc, price, korName, korDesc, quantity, totalItemPrice }

    const currQuantity: number = products.find(item => item.idName === idName) ? products.find(item => item.idName === idName)!.quantity : 0;
    const currTotalItemPrice = products.find(item => item.idName === idName)?.totalItemPrice;

    return (
        <div id="mini-card" className="card w-100 mb-2">
            <div className='row g-0 w-100'>
                <div className='col-md-4'>
                    <img src={image} className="mini-img img-fluid img-thumbnail" alt="tea item" />

                </div>
                <div className='col-md-8 p-4'>
                    <div id="mini-card-body" className="d-flex flex-column align-items-center align-items-md-end justify-content-center">
                        <p className="text-center fs-3">{langEng ? name : korName}</p>
                        <p>Price: ${currTotalItemPrice}</p>
                        <p>Qty: {currQuantity}</p>
                        <div className='d-flex gap-5'>
                            <button onClick={() => addToCart(product)} className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                            </button>
                            <button onClick={() => removeFromCart({ ...product, quantity: currQuantity })}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;