import { useProducts } from "../context/Context";
import MiniProductCard from "../components/MiniProductCard";
import { ProductInCart } from "../../typings";

type ProductObject = ProductInCart[];

const Cart = () => {
    const { products, total, langEng } = useProducts();

    const productsWithQuantities: ProductObject = [];

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productId = product.idName;

        const existingProdInd = productsWithQuantities.findIndex(p => p.idName === productId);

        if (existingProdInd > -1) {
            productsWithQuantities[existingProdInd].quantity++;
            productsWithQuantities[existingProdInd].totalItemPrice = Math.floor(productsWithQuantities[existingProdInd].totalItemPrice + productsWithQuantities[existingProdInd].price)
        } else {
            productsWithQuantities.push({ 
                ...product,
                quantity: 1,
                totalItemPrice: product.price
            })
        }
    }

     return (
        <div className="container-fluid bg-light py-5">
            <h1 className="text-center fw-bold">{langEng ? "Shopping Cart" : "장바구니"}</h1>
            <div className="my-3 d-flex align-items-start flex-column align-items-end w-100">
                {productsWithQuantities.map((product: ProductInCart, index: number) => (
                    <MiniProductCard {...product} key={index} />
                ))}
                <h2 className="w-100 pt-5 text-center">{langEng ? "Your cart total is: " : "총 합계: "} ${total}</h2>
            </div>
        </div>
     )
}

export default Cart;