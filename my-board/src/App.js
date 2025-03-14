import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="App"> 
	<header className="App-header">
		<h1>게시판</h1>
	</header>
	<div className="board-container">
		<h2>게시글 목록</h2>
		<button className="Write-button">글쓰기</button>

		<table className="board-table">
			<thead>
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>날짜</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th>1</th>
					<th>윤다연</th>
					<th>2025-03-14</th>
				</tr>
			</tbody>
			<tbody>
				<tr>
					<th>2</th>
					<th>윤다연</th>
					<th>2025-03-14</th>
				</tr>
			</tbody>
		</table>
	</div>
</div>
  );
}

export default App;
