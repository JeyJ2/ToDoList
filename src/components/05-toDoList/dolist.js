import React, { useState } from "react";
import "./style.css";

function DoList() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim(" ") !== "") {
      setList([{ text: task, completed: false }, ...list]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setList(
      list.map((element, index) => {
        if (index === id) {
          return { ...element, completed: !element.completed };
        }
        return element;
      })
    );
  };

  const supprimer = (id) => {
    setList(list.filter((element, index) => index !== id));
  };

  return (
    <div className="todo-list">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your task"
          id="task"
          name="task"
          onChange={handleChange}
          value={task} // Assure que la valeur du champ est liée à l'état "task"
        />
        <button>Valider</button>
      </form>

      {list.map((element, id) => {
        return (
          <div className={`todo-item ${element.completed ? "completed" : ""}`} key={id}>
            <p>
              <span
                className="task-text"
                style={{
                  textDecoration: element.completed ? "line-through" : "none",
                }}
                onClick={() => toggleTask(id)}
              >
                {element.text}{" "}
              </span>
            </p>
                <button className="action-buttons" onClick={() => supprimer(id)}>
                ❌
              </button>
          </div>
        );
      })}
    </div>
  );
}

export default DoList;