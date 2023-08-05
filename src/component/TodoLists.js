import "./TodoLists.css"

const TodoLists = (props) =>{

  return (
    <div className="todo-list">
      <ul>
        {props.dataLists.map((item,index) => (
          <li className="todo-list__items" key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;