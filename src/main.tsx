import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TasksList from './components/TaskList.tsx';


createRoot(document.getElementById('root')!).render(
  <>
    <TasksList />
  </>,
)
