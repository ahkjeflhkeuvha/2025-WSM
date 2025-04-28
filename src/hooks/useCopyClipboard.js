import {useState} from "react";

function useCopyClipboard(timeout=2000) {
    const [copied, setCopied] = useState(false);

    const copy = (text) => {
        if(!navigator?.clipboard) {
            console.warn("클립보드를 사용할 수 없습니다.")
            return;
        } 

        navigator.clipboard.writeText(text)
        .then(() => {
            alert("게좌 번호가 복사되었습니다.")
            setCopied(true)
        })
        .catch(() => {
            alert("계좌 번호 복사에 실패하였습니다.")
            setCopied(false)
        })
    }

    return [copy, copied]
}

export default useCopyClipboard;