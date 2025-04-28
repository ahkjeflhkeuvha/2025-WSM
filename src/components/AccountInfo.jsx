import useCopyClipboard from "../hooks/useCopyClipboard";

function AccountInfo() {
    const groomAccount = {
        name: '마에다 리쿠',
        bank : '하나은행',
        number : '123-456-7891012'
    };
    const brideAccount = {
        name: '오지은',
        bank : '하나은행',
        number : '123-456-1234567'
    };

    const [copy, copied] = useCopyClipboard();
 

    return (
        <section>
            <h2>마음 전하실 곳</h2>
            <div style={{border: '1px solid #fcfc', padding: '10px'}}>
                <p><strong>신랑 {groomAccount.name}</strong></p>
                <p>{groomAccount.bank} {groomAccount.number}</p>
                <button onClick={() => copy(groomAccount.number)}>복사하기</button>
                {copied && <p style={{ color : 'green'}}>계좌번호가 복사되었습니다.</p>}
            </div>
            <div>
                <p><strong>신부 {brideAccount.name}</strong></p>
                <p>{brideAccount.bank} {brideAccount.number}</p>
                <button onClick={() => copy(brideAccount.number)}>복사하기</button>
                {copied && <p style={{ color : 'green'}}>계좌번호가 복사되었습니다.</p>}
            </div>
        </section>
    )
}

export default AccountInfo;