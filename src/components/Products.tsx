import { productData } from "../assets/productData"
import { useProducts } from "../context/Context"
import ProductCard from "./ProductCard"

const Products = () => {
    const { langEng } = useProducts();
    return (
        <>
        <div className="row row-content">
                <div className="col col-lg-10 offset-lg-1 d-flex my-md-4">
                    <h3 id="tea-products" className="mt-5 pt-3">{langEng ? "Order Online" : "시그니처 차"}</h3>
                </div>
            </div>
        <div className="card-container col col-lg-10 offset-lg-1 d-flex flex-wrap space-between">
                {productData.map((data, index) => (
                    <ProductCard key={index} {...data} />
                ))}
            </div>
        </>
       
    )
}

export default Products;