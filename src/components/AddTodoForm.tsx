import { useState } from 'react';

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

export const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="What do you need to do?"
      />
      <button type="submit">Add</button>
    </form>
  );
};
