import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([
    {id: 1, title: 'Html', isDone: true},
    {id: 2, title: 'Css', isDone: true},
    {id: 3, title: 'JS', isDone: false},
    {id: 4, title: 'React', isDone: false},
    {id: 5, title: 'rest api', isDone: false},
    {id: 6, title: 'graphQL', isDone: false},
  ])

  const removeTask = (id: number) => {
    const newArr = tasks.filter(t => t.id !== id);
    setTasks(newArr)
  }

  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={tasks}
        removeTask={removeTask}
      />
    </div>
  );
}

export default App;