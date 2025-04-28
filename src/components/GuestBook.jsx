import { useState } from "react";

function GuestBook({}) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
    const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name.trim() && message.trim()) {
        const newEntry = {
            name, 
            message,
            date: new Date().toLocaleDateString()
        }
        console.log(newEntry)
        setEntries([...entries, newEntry]);
        setName("");
        setMessage("");
    }
}

  return (
    <section>
        <h2>방명록</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="메시지" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <br />
            <button type="submit" >제출</button>
        </form> 

        <div className="list">
            {entries.length === 0 ? <p>방명록이 아직 없습니다.</p> : (
                entries.map((entry, index) => {
                    return (
                        <div key={index} style={{
                            borderBottom: '1px solid #ff0000',
                            marginBottom: '10px',
                            paddingBottom: '10px'
                        }}>
                            <strong>{entry.name}</strong> 
                            <p>{entry.message}</p>
                        </div>
                    )
                })
            )}
        </div>
    </section>
  )
}

export default GuestBook;
