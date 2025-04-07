function Location() {
    return (
        <section>
            <h2>오시는 길</h2>
            <p><strong>그랜드 호텔 서울</strong></p>
            <p>서울특별시 어쩌구 저쩌로 1234</p>

            <div>
                {/* // 지도 넣을 공간 */}
                지도

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1 m12!1m3!1d3162.7196401798656!2d126.98458657632311!3d37.561668624406536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2fa90db2c0d%3A0x86b074afb68794d1!2z642UIOq3uOuenOuTnO2YuO2FlCDrqoXrj5nsoJA!5e0!3m2!1sko!2sfr!4v1743995263176!5m2!1sko!2sfr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

            <h3>대중교통</h3>
            <ul>
                <li>
                    지하철 2호선 신림역 3번 출구 도보 3분
                </li>
                <li>
                    버스 152번, 5516번, 5522B번 하차 후 도보 5분
                </li>
            </ul>

            <h3>자가용</h3>
            <p>호텔 주차장 이용 가능 (3시간 무료)</p>

        </section>
    )
}

export default Location;