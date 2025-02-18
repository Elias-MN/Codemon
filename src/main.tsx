import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TaskList } from './components/TaskList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <TaskList />
  </StrictMode>,
)
