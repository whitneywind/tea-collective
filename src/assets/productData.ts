import MatchaImg from './IMG_1007.jpg';
import SenchaImg from './IMG_6762.jpg';
import HojichaImg from './IMG_6345.jpg';
import GyokuroImg from './IMG_1910.jpg';
import { Product } from '../../typings';

export const productData: Product[] = [
    {
        name: "Matcha",
        idName: "matcha",
        price: 16,
        image: MatchaImg,
        desc: "Our ceremonial matcha is ground from premium harvest leaves. A pure, rich matcha flavor unlike any other.",
        korName: "말차",
        korDesc: "프리미엄 수확된 찻입으로부터 특급 세레모니얼급 말차. 색부터 뛰어난 저희 말차는 맛과 향의 풍부함을 자랑합니다."

    },
    {
        name: "Sencha",
        idName: "sencha",
        price: 10,
        image: SenchaImg,
        desc: "Sencha brews a balance of sweetness and astringency. This classic tea neatly fits any occasion.",
        korName: "센차",
        korDesc: "새로 난 찻잎을 곧 쪄서 비벼 만든 센차는 전통적이며 세상 널리 알려진 상품일수록 맛과 향이 좋고 소중하다."
    },
    {
        name: "Hojicha",
        idName: "hojicha",
        price: 14,
        image: HojichaImg,
        desc: "Remarkably aromatic, light-bodied, and refreshing. This hojicha blend of roasted green tea leaves and stems.",
        korName: "호지차",
        korDesc: "호지차는 볶은 녹차인데, 한번만 마시면 잊을 수 없는 맛이다. 이 색다른 차는 다른 차 종류와 비교할 수 없을 정도로 특이학고 인상스럽다."
    },
    {
        name: "Gyokuro",
        idName: "gyokuro",
        price: 10,
        image: GyokuroImg,
        desc: "Gyokuro is a green tea with a sweet umami flavor. This tea is one for slowly sipping and savoring.",
        korName: "교쿠로",
        korDesc: "교쿠로는 햇빛을 차단함으로써 쓰고 떫은 맛이 없고 단맛이 응축되어 있기에 일상생활에서 언제든 즐기기에 딱 맞는 그런 차라고 한다."
    }
]