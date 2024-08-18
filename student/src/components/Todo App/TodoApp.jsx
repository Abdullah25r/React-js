import React , {useState} from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
const TodoApp = () => {
  const [listTodo, setListTodo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };
  const deleteItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div>
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading text-center">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoApp;
