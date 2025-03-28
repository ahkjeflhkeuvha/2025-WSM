import React, {useState} from "react";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // 페이지가 새로고침 되는 것 방지
        onSearch(searchTerm);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="상품 검색..." value={searchTerm} onChange={handleChange} />
                <button type="submit">
                    <span>search</span>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;