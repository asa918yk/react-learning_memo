export default function MemoForm() {
    return (
        <div className="form">
            <h2>Edit</h2>
            <form action="">
                <div>
                    <input id="title" name="title" type="text" placeholder="タイトルを入力してください" />
                </div>
                <div>
                    <textarea name="content" placeholder="内容を入力してください"></textarea>
                </div>
                {/* <div>
                    <button type="button" onClick={submit}>
                    タスクを追加</button>
                </div> */}
            </form>
        </div>
    );
}