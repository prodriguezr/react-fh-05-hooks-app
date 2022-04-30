import { TodoListItem } from './';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          index={i}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </ul>
  );
};
