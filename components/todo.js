"use client";

import Image from 'next/image';
import '../styles/todo.module.css';

export default function ToDo({ todo, onChange, onDelete }) {
  return (
    <div className="toDoRow" key={todo.id}>
      <input
        className="toDoCheckbox"
        name="completed"
        type="checkbox"
        checked={todo.completed}
        onChange={(e) => onChange(e, todo.id)}
      />
      <input
        className="todoInput"
        name="name"
        type="text"
        value={todo.name}
        onChange={(e) => onChange(e, todo.id)}
      />
      <button className="deleteBtn" onClick={() => onDelete(todo.id)}>
        <Image src="/delete-outline.svg" width={24} height={24} alt="Delete" />
      </button>
    </div>
  );
}
