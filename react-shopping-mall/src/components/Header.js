import React from "react";

import { Link } from "react-router-dom";
import { SearchBar} from "../components/SearchBar";

function Header({cartItemCount, onSearch}) {
    return (
        <header>
            <div className="logo"> // logo
                <Link to="/">
                    <h1>바니오</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/category/의류">의류</Link></li>
                    <li><Link to="/category/전자기기">전자기기</Link></li>
                    <li><Link to="/category/악세서리">악세서리</Link></li>
                </ul>
            </nav>
            <div className="">
                <SearchBar onSearch= {onSearch} />
                
                <div>
                    <Link to="/cart">
                        <span>shopping cart</span>
                        {cartItemCount > 0 && (
                            <span>{cartItemCount}</span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header;