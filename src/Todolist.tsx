import React, {FC} from 'react';
import {FilterType, TasksType} from './App';

type PropsType = {
  title: string
  tasks: Array<TasksType>
  removeTask: (id: number) => void
  filterTask: (val: FilterType) => void
};

export const Todolist: FC<PropsType> = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <br/>
      <div>
        <button onClick={() => props.filterTask('all')}>All</button>
        <button onClick={() => props.filterTask('active')}>Active</button>
        <button onClick={() => props.filterTask('completed')}>Completed</button>
      </div>

      <ul>
        {
          props.tasks.map(t => (
            <li key={t.id}>
              <button onClick={() => props.removeTask(t.id)}>X</button>
              <input type="checkbox" checked={t.isDone}/>
              <span>{t.title}</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}