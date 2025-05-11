const list = document.getElementById('todo-list');
const input = document.getElementById('todo-input');

function addTodo() {
  const text = input.value.trim();
  if (text === '') return;
  const item = document.createElement('li');
  item.textContent = text;
  item.onclick = () => {
    item.classList.toggle('done');
    save();
  };
  list.appendChild(item);
  input.value = '';
  save();
}

function save() {
  const todos = [];
  list.querySelectorAll('li').forEach(li => {
    todos.push({ text: li.textContent, done: li.classList.contains('done') });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

function load() {
  const todos = JSON.parse(localStorage.getItem('todos') || '[]');
  todos.forEach(todo => {
    const item = document.createElement('li');
    item.textContent = todo.text;
    if (todo.done) item.classList.add('done');
    item.onclick = () => {
      item.classList.toggle('done');
      save();
    };
    list.appendChild(item);
  });
}

load();
