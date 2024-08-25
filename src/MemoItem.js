export default function MemoItem({title, content, date, updateNum, index}) {
  function select() {
    updateNum(index);
  }
  return (
    <div className="item">
      <button onClick={select}>
        <span>【{title ? title : "新規メモ"}】</span>
        <span className="content">{content ? content : "追加テキストなし"}</span>
        <time dateTime={date}>{date}</time>
      </button>
    </div>
  );
}