import type { Todo } from '../TodoApp';

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  const { id, text, done } = todo;

  return (
    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input type="checkbox" checked={done} onChange={() => onToggle(id)} />
      <span style={{ textDecoration: done ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={() => onDelete(id)}>❌</button>
    </li>
  );
};
