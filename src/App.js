import { useState, useEffect } from "react";
import MemoList from "./MemoList";
import MemoForm from "./MemoForm";
function App() {
  if(!window.localStorage.getItem('memo')) {
    window.localStorage.setItem("memo", JSON.stringify([]));
  }
  const storage = JSON.parse(window.localStorage.getItem('memo'));
  const [memos, setMemos] = useState(storage);
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
  useEffect(() => {
    updateStorage();
  }, [memos]);
  function updateStorage() {
    console.log(memos);
    window.localStorage.setItem("memo", JSON.stringify(memos));
  }
  function updateNum(index) {
    setNum(index)
  }
  function createMemo() {
    setMemos([...memos, {
      title: '',
      content:'',
      date: getTime(),
    }]);
    updateNum(memos.length);
  }
  function updateMemo(e) {
    setMemos(memos.map((memo, index) =>
      index === num ? {...memo, [e.target.name]: e.target.value, date: getTime()} : memo
    ));
  }
  function deleteMemo(indexNum) {
    setMemos(
      memos.filter((memo, index) => (index !== indexNum))
    )
    updateNum('');
  }
  return (
    <div className="App">
      <h1>Memo</h1>
      <MemoList createMemo={createMemo} updateNum={updateNum} deleteMemo={deleteMemo} memos={memos} />
      {num !== '' && <MemoForm {...memos[num]} activeIndex={num} updateMemo={updateMemo} />}
    </div>
  );
}

export default App;
