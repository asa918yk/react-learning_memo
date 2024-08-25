import { memo, useState } from "react";
import MemoList from "./MemoList";
import MemoForm from "./MemoForm";
function App() {
  const [memos, setMemos] = useState([]);
  //選択されているメモのインデックスを保持
  const [num, setNum] = useState('');
  function getTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    return formattedDate;
  }
  function updateNum(index) {
    setNum(index)
  }
  function createMemo() {
    console.log('create');
    setMemos([...memos, {
      title: '',
      content:'',
      date: getTime(),
    }]);
    updateNum(memos.length)
  }
  
  return (
    <div className="App">
      <h1>Memo</h1>
      <MemoList createMemo={createMemo} updateNum={updateNum} memos={memos} />
      {num !== '' && <MemoForm {...memos[num]} />}
    </div>
  );
}

export default App;
