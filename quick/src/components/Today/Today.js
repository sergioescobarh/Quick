import "./today.css";
import "../ToDo/ToDo";
import { ToDo } from "../ToDo/ToDo";

//settting default values for to dos
let tasks = [
  { text: "ver curso de platzi", completed: false },
  { text: "llamar a laura", completed: false },
  { text: "comer", completed: false },
  { text: "ver twd", completed: false },
];

function Today() {
  return (
    <div className="today-container">
      <div className="today-header">
        <h2>TODAY</h2>
        <h4>Sábado, 25 de Junio de 2022</h4>
        <p>ha cumplido 2 de 5 tareas</p>
        <input placeholder="Escribe aqui la tarea que deseas buscar"></input>
      </div>
      
      <div className="tasks-container">
        {tasks.map((todo) => (
          <ToDo text={todo.text} />
        ))}
        <button>+</button>
      </div>
      
    </div>
  );
}
export { Today };
