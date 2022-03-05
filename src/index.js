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
        // 押された完了ボタンの祖先タグ(li)を未完了リストから削除
        deleteFromIncompleteList(completeButton.closest('li'));
    });

    // button(削除)タグの生成
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', () => {
        // 押された削除ボタンの祖先タグ(li)を未完了リストから削除
        deleteFromIncompleteList(deleteButton.closest('li'));
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

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById('incomplete-list').removeChild(target);
};

document.getElementById('add-button').addEventListener('click', () => onClickAdd());
