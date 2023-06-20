import { useProducts } from "../context/Context";

const About = () => {
    const { langEng } = useProducts();
    return (
        <>
        <div className="row row-content">
            <div className="col col-12 col-lg-10 offset-lg-1 d-flex my-md-4">
                <h3 id="about" className="mt-5 pt-2">{langEng? 'About Us' : '브랜드 스토리'}</h3>
            </div>
            <div className="col col-8 offset-2 pt-5">
                <p id="about-text">{langEng ? "Founded in 2015, Tea Collective is the culmination of years of dedicated practice and intentionality. Our high-quality organic teas are grown on a generational family farms in Uji, Japan before being brought here to Seoul. We've dedicated our space to the appreciation to the art and delight of tea, and hope to share that with you as well." : "2015년도 설립했을 때부터 오랜 역사를 가진 말차(抹茶)를 존중했슺니다. 녹차 본래의 맛을 전하고 싶다는 생각 하에, 마음에 드는 찻잎을 고르면 차를 끓이는 방법부터 직원이 지도해 줍니다. 맛있는 일본차를 전하는 것뿐만이 아니라, 그 깊이는 물론 즐기는 방법까지 제대로 체험할 수 있습니다."}</p>
            </div>
            </div>
        </>
    )
}

export default About;