// app/page.tsx
import Layout from '../components/layout'
import TodoList from '../components/todo-list'

export default function HomePage() {
  return (
    <Layout>
      <TodoList />
    </Layout>
  )
}
