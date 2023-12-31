import { useProducts } from "../context/Context";
import MiniProductCard from "../components/MiniProductCard";
import { Product } from "../../typings";
import { Link } from "react-router-dom";

const Cart = () => {
    const { products, total, langEng } = useProducts();

     return (
        <div className="cart-container bg-light pb-5">
            <Link to="/" className="cart-back d-flex gap-2 pt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-left-square" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                </svg>
                <p className="d-none d-md-block fs-4">{langEng ? "Back to Main Site" : "홈으로 돌아가기"}</p>
            </Link>
            <h1 className="text-center fw-bold pt-4">{langEng ? "Shopping Cart" : "장바구니"}</h1>
            <div className="my-3 d-flex align-items-start flex-column align-items-end">
                {products.map((product: Product, index: number) => (
                    <MiniProductCard {...product} key={index} />
                ))}
                <h2 className="w-100 pt-5 text-center">{langEng ? "Your cart total is: " : "총액: "} ${total}</h2>
            </div>
        </div>
     )
}

export default Cart;