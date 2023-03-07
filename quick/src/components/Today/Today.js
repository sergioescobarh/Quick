import './today.css';
import '../ToDo/ToDo';
import { ToDo } from '../ToDo/ToDo';

//settting default values for to dos


function Today () {
    return(

    <div >
    <h2 >TODAY</h2>
    <h4>Sábado, 25 de Junio de 2022</h4>
    <p>hjkhjjhj</p>

    <div className="todo-container">
        <ToDo/>
    </div>

    </div>
    )
}
export { Today };
