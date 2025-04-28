function Invitation() {
    const handleClick = () => {
        alert("축하해주셔서 감사합니다! 🙋🤷‍♀️")
    }
    return (
        <div>
            <h2>초대합니달라</h2>
            <p>
            사랑하는 사람들과 함께하는 특별한 날, <br/>
            
            두 사람의 인연이 결실을 맺는 순간에 <br/>
            여러분을 초대합니다.  <br/>
            
            저희의 새로운 시작을 함께 축하해 주세요. <br/>
            </p>

            <div>
                <p>정정정과 진진진의 장남 <strong>마에다 리쿠</strong></p>
                <p>오종준과 하미영의 차녀 <strong>오지은</strong></p>
            </div>

            <button onClick={handleClick}>
                축하하기
            </button>
        </div>
    )
}

export default Invitation;