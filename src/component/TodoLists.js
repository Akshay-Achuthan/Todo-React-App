import "./TodoLists.css"

const TodoLists = (props) =>{

  const deleteButtonHandler = (delItem) => {
    props.onUserDelete(delItem);
  }

  return (
    <div className="todo-list">
      <ul>
        {props.dataLists.map((item) => (
          <li className="todo-list__items" key={item.id}>
            <div className="todo-list__date">{item.date}</div>
            {item.text}
            <button className="todo-list__button" onClick={() => {deleteButtonHandler(item.id)}}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;