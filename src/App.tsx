import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type TasksType = {
  id: number
  title: string
  isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([
    {id: 1, title: 'Html', isDone: true},
    {id: 2, title: 'Css', isDone: true},
    {id: 3, title: 'JS', isDone: false},
    {id: 4, title: 'React', isDone: false},
    {id: 5, title: 'rest api', isDone: false},
    {id: 6, title: 'graphQL', isDone: false},
  ])

  const [filter, setFilter] = useState<FilterType>('all');

  const removeTask = (id: number) => {
    const newArr = tasks.filter(t => t.id !== id);
    setTasks(newArr)
  }

  const filterTask = (val: FilterType) => {
    setFilter(val);
  }

  let filteredTasks = tasks;

  if (filter === 'active') {
    filteredTasks = tasks.filter(t => t.isDone)
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(t => !t.isDone)
  }


  return (
    <div className="App">
      <Todolist
        title="What to learn?"
        tasks={filteredTasks}
        removeTask={removeTask}
        filterTask={filterTask}
      />
    </div>
  );
}

export default App;