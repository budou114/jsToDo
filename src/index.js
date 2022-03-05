const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById('add-text').value;
    document.getElementById('add-text').value = '';

    // li生成
    const li = document.createElement('li');

    // div生成
    const div = document.createElement('div');
    div.className = 'list-row';

    // p生成
    const p = document.createElement('p');
    p.innerText = inputText;

    // divタグの子要素にpタグを挿入
    div.appendChild(p);

    // liタグの中に子要素divタグを挿入
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
