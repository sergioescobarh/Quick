import {ToDo} from '../molecules/ToDo';
import './home.css';
//temporal:
const todo = [{name:'comer',completed:false,date:'default'},
{name:'tarea',completed:false,date:'default'},
{name:'llamar a mamá',completed:false,date:'default'},
{name:'salir a correr',completed:false,date:'default'},
{name:'meditar',completed:false,date:'default'}];

function Home () {
    return (
        <body>
            <main>
                <span className="input-container">
                    <input type="text" placeholder='¿buscas una tarea? escribela aqui' />
                </span>
                <section className="todo-container">
                    <ul>
                    {todo.map((item) => <li><ToDo name={item.name}/></li>)}
                    </ul>
                    
                </section>
            </main>
        </body>
    )
};

export {Home};