import logo from '../logo.svg';
import '../styles/App.css';
import { useEffect, useState, useTransition } from 'react';
import { Modal } from '../components/list.js';
import { Header } from '../components/header.js';

function App() {
  let month = 2;
  let day = 17;
  let post = '강남 우동 맛집';
  let [likeCount, plusCount] = useState(0);
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [contentDate, setDate] = useState(month + '월 ' + day + '일 발행');
  let [board, setBoard] = useState(['REACT1', 'ReactStudy']);
  const [data, setData] = useState({});

  //useEffect(() => {
  //Express 서버에서 데이터 가져오기
  //fetch('/api/data')
  //.then(response => response.json())
  //.then(data => setData(data));
  //})

  return (
    <div className="App">
      <Header></Header>
      <button onClick={() => {
        let change = [...title];
        console.log(change);
        change[0] = '여자 코트 추천';
        setTitle(change);
      }}>글수정</button>

      <button onClick={() => {
        let copy = [...title];
        copy.sort((a, b) => a.toUpperCase() < b.toUpperCase() ? -1 : 1);
        setTitle(copy);
      }}>가나다순 정렬</button>

      <div className="list">
        <h4>{title[0]} <span onClick={() => { plusCount(likeCount + 1) }}>👍</span> {likeCount} </h4>
        <p>{contentDate}</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>{contentDate}</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>{contentDate}</p>
      </div>
      <Modal title={board[0]} content="React Study"></Modal>
      <form style={{ float: 'left' }} action='http://localhost:4000/gogo' method='post'>
        <input style={{ float: 'left' }} type='text' name='id'></input><br />
        <input type='text' name='name'></input>
        <button type='submit'>보내기</button>
      </form>
    </div >
  );
}

export default App;
