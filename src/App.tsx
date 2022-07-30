import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';

import {Todolist} from './Todolist';

export type TasksType = {
  id: string
  title: string
  isDone: boolean
}

export type FilterType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<Array<TasksType>>([
    {id: v1(), title: 'Html', isDone: true},
    {id: v1(), title: 'Css', isDone: true},
    {id: v1(), title: 'JS', isDone: false},
    {id: v1(), title: 'React', isDone: false},
    {id: v1(), title: 'rest api', isDone: false},
    {id: v1(), title: 'graphQL', isDone: false},
  ])

  const [filter, setFilter] = useState<FilterType>('all');

  const addTask = () => {
    const newTask =  {id: v1(), title: 'New Task', isDone: false};
    setTasks([newTask, ...tasks])
  }

  const removeTask = (id: string) => {
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
        addTask={addTask}
      />
    </div>
  );
}

export default App;