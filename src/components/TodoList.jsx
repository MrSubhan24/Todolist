import { useState, useEffect } from 'react';
import Button from './Button';
import InputField from './InputField';
import TodoCard from './TodoCard'; 
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editText, setEditText] = useState('');
  const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  const addTodo = () => {
    if (!newTitle.trim() || !newText.trim()) return;

    const updatedTodos = [{ title: newTitle, text: newText }, ...todos];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setNewTitle('');
    setNewText('');
    setShowInput(false);
  };

  const editTodo = (index) => {
    const todoToEdit = todos[index];
    setEditIndex(index);
    setEditTitle(todoToEdit.title);
    setEditText(todoToEdit.text);
    setShowEditForm(true);
  };

  const saveEdit = () => {
    if (editTitle.trim() === '' || editText.trim() === '') return;

    const updatedTodos = [...todos];
    updatedTodos[editIndex] = { title: editTitle, text: editText };
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTitle('');
    setEditText('');
    setShowEditForm(false);
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditTitle('');
    setEditText('');
    setShowEditForm(false);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-8 flex justify-center">
        {!showInput ? (
          <Button  
            onClick={() => setShowInput(true)}
            text="Tambah Todo"
            color="blue"
          />
        ) : (
          <div className="mb-4 pt-2">
            <InputField
              type="text"
              placeholder="Judul todo..."
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <textarea
              className="w-full border border-gray-300 p-2 mb-2"
              placeholder="Deskripsi todo..."
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
            <div className='flex gap-2'>
            <Button onClick={addTodo} text="Tambah" color="blue" />
            <Button onClick={() => setShowInput(false)} text="Batal" color="red"/>
            </div>
          </div>
        )}
      </div>
      <ul className="overflow-y-scroll max-h-80 flex gap-5 justify-center flex-wrap">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <TodoCard
              key={index}
              todo={todo}
              onDelete={() => deleteTodo(index)}
              onEdit={() => editTodo(index)}
            />
          ))
        ) : (
          <p className="text-gray-400 flex justify-center">Todo list kosong</p>
        )}
      </ul>
      {showEditForm && (
        <div className="mb-4">
          <InputField
            type="text"
            placeholder="Judul todo..."
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-300 p-2 mb-2"
            placeholder="Deskripsi todo..."
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className='flex gap-2'>
          <Button className="bg-green-500" onClick={saveEdit} text="Simpan" color="green" />
          <Button onClick={cancelEdit} text="Batal" color="red" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
