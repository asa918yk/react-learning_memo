export default function MemoForm({activeIndex, updateMemo, title, content}) {
    function update(e) {
        updateMemo(e);
    }
    return (
        <div className="form">
            <h2>Edit</h2>
            <form action="">
                <div>
                    <input id="title" name="title" type="text" placeholder="タイトルを入力してください" value={title} onChange={update} />
                </div>
                <div>
                    <textarea name="content" placeholder="内容を入力してください" value={content} onChange={update}></textarea>
                </div>
                
            </form>
        </div>
    );
}