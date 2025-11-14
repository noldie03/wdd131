const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');






button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Close');
        deleteButton.className = 'close-button';

        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();
    }
});

// deleteButton.addEventListener('click', function () {
//     list.removeChild(li);
//     input.focus();
// });

// event delegation: handle clicks on any delete button inside the list
list.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.close-button')) {
        const li = e.target.closest('li');
        if (li) li.remove(); //If e.target.closest('li') found an <li>, it returns that element; if it didn't it returns null.
        input.focus();
    }
});