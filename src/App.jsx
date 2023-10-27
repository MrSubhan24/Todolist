
import TodoList from './components/TodoList';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div className=" pt-3">
     <h1 className="bg-blue-500 text-white max-w-md mx-auto text-2xl font-bold text-center  rounded py-5 ">Todo List App</h1>
      <TodoList />
    </div>
  );
}

export default App;
