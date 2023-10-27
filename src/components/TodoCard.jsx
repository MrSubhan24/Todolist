
/* eslint-disable react/prop-types */
import Button from './Button';

const TodoCard = ({ todo, onDelete, onEdit }) => {
  // Membagi teks menjadi item terpisah berdasarkan baris baru
  const items = todo.text.split('\n');

  return (
    <div className="bg-blue-200 shadow-md p-2 mb-2 gap-6 flex flex-col justify-between items-start rounded">
      <h2 className="text-xl font-semibold">{todo.title}</h2>
      <ul > {/* Menggunakan elemen <ul> untuk daftar */}
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-2"> {}
        <Button className="bg-red-500" onClick={onDelete} text="Hapus" color="red" />
        <Button className="bg-blue-500" onClick={onEdit} text="Edit" color="blue" />
      </div>
    </div>
  );
};

export default TodoCard;
