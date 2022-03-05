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

    // button(完了)タグの生成
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', () => {
        alert('完了');
    });

    // button(削除)タグの生成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        alert('削除');
    });

    // divタグの子要素にpタグを挿入
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    // liタグの中に子要素divタグを挿入
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById('incomplete-list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
