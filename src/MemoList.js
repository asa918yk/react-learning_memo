
import MemoItem from "./MemoItem";
export default function MemoList({createMemo, memos, updateNum, deleteMemo}) {
    return (
        <>
            <button onClick={createMemo}>新規追加</button>
            <div className="list">
              <h2>List</h2>
              {memos.map((memo, index) => 
                <MemoItem {...memo} key={index} updateNum={updateNum} index={index} deleteMemo={deleteMemo} />
              )}
            </div>
        </>
    );
}