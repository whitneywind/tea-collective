import naverMap from '../assets/naver-map.jpg';
import { useProducts } from '../context/Context';


const DirectionsEng = () => {
    const { langEng } = useProducts();
    return (
        <>
        {langEng ? (
            <>
            <div className="row row-content">
                <div className="mt-2 col col-xs-12 col-lg-10 offset-lg-1">
                    <div id="map-div">
                        <iframe id="google-map-1" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12657.193075834184!2d127.04119868406984!3d37.52446568032793!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4e10d11250265f0e!2sTea%20Collective!5e0!3m2!1sen!2sus!4v1653507628806!5m2!1sen!2sus" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="row row-content mt-5">
                <div className="col col-lg-10 offset-lg-1">
                    <h3 className="text-center">Nearest Subway Station:  <b>Cheongdam Station</b></h3>
                    <h4 className="text-center">Estimated Time: <b>10 minutes</b></h4>
                </div>
            </div>
            <div className="row row-content mb-4">
                <div className="mt-3 col col-lg-10 offset-lg-1">
                    <div id="subway-directions">
                       <h4>Directions from Cheongdam Station:</h4>
                       <ol>
                           <li>Exit the station via exit 10.</li>
                           <li>Walk straight for 40 feet and turn right at the intersection.</li>
                           <li>Continue walking straight ahead for 200 feet.</li>
                           <li>The building is on your right, immediately after the "Starship Entertainment" building.</li>
                           <li>Our teashop is the first door on the left once you walk inside the building. </li>
                       </ol>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row row-content">
                <div className="mt-4 col col-lg-10 offset-lg-1">
                    <h3 className="text-center">Nearest Bus Stop:  <b>Cheongdam Public Safety Center</b></h3>
                    <h4 className="text-center">Estimated Time: <b>4 minutes</b></h4>
                </div>
            </div>
            <div className="row row-content">
                <div className="mt-3 mb-5 col col-lg-10 offset-lg-1">
                    <div id="bus-directions">
                       <h4>Directions from Cheongdam Station:</h4>
                       <ol>
                           <li>Turn right once you get off the bus.</li>
                           <li>Walk straight for 25 feet.</li>
                           <li>The building is on your left, right after the "Hotel Entra."</li>
                           <li>Our teashop is the first door on the left once you walk inside the building. </li>
                       </ol>
                    </div>
                </div>
            </div>
        </>
        ) : (
            <>
            <div className="row row-content">
                    <div className="mt-2 col col-lg-10 offset-lg-1">
                        <div id="map-div">
                            <a href="http://naver.me/FbuUuNWa" target="_blank"><img id='naver-map' src={naverMap} /></a>
                        </div>
                    </div>
                </div>
                <div className="row row-content mt-5">
                    <div className="col col-lg-10 offset-lg-1">
                        <h3 className="text-center">가장 가까운 지하철역:  <b>청담역</b></h3>
                        <h4 className="text-center">예상 이동시간: <b>10</b>분</h4>
                    </div>
                </div>
                <div className="row row-content mb-4">
                    <div className="mt-3 col col-lg-10 offset-lg-1">
                        <div id="subway-directions">
                        <h4>청담역에서 오시는 길:</h4>
                        <ol>
                            <li>10번 출구로 나오세요.</li>
                            <li>약 12m 직진하고 사거리에서 오른쪽으로 돌고 가세요.</li>
                            <li>약 60m 앞으로 직진하세요.</li>
                            <li>저의 건물은 오른쪽에 위치해 있습니다.</li>
                            <li>바로 옆 건물은 스타쉽엔터테인먼트를 지나가서 건물 앞문으로 들어오세요.</li>
                            <li>건물 앞문으로 들어오면 저희 카페는 첫번째 왼쪽 문입니다.</li>
                        </ol>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row row-content">
                    <div className="mt-4 col col-lg-10 offset-lg-1">
                        <h3 className="text-center">가장 가까운 버스정류장:  <b>청담치안센터</b></h3>
                        <h4 className="text-center">예상 이동시간: <b>4</b>분</h4>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="mt-3 mb-5 col col-lg-10 offset-lg-1">
                        <div id="bus-directions">
                        <h4>청담치안센터 정류장에서 오시는 길:</h4>
                        <ol>
                            <li>버르를 내리자 오른쪽으로 돌고 직진하세요.</li>
                            <li>약 8m 직진하세요.</li>
                            <li>저의 카페의 건물은 호텔엔트라라는 건물 옆에 있습니다.</li>
                            <li>호텔 건물 지나가서 저희 건물 앞문으로 들어오세요.</li>
                            <li>건물 앞문으로 들어오면 저희 카페는 첫번째 왼쪽 문입니다.</li>
                        </ol>
                        </div>
                    </div>
                </div>
            </>
        )}
        </>
    )
}

export default DirectionsEng;