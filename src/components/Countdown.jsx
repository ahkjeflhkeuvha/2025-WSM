import {useState, useEffect} from "react";

function Countdown() {
    const [diff, setDiff] = useState(0);

    useEffect(() => {
        const weddingDate = new Date("2025-06-15T13:00:00"); // 결혼식 날짜
        const currentDate = new Date();
        const timeDiff = weddingDate - currentDate;

        const d = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        setDiff(d);
    }, []);

    return (
        <div>
            <h2>결혼식까지 남은 날짜</h2>
            <p>{diff}일</p>
        </div>
    )

}

export default Countdown;