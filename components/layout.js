"use client";

import '../styles/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <h1 className="title">To Do</h1>
      {children}
    </div>
  );
}
