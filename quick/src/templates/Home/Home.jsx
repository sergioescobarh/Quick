import { useState } from 'react';
import {Header} from '../../organisms/Header/Header'
import {ToDo} from '../../molecules/ToDo';
import {Search} from '../../molecules/Search';
import './home.scss';
//functions of Home component



//temporal:
const todo = [{name:'comer',completed:false,date:'default'},
{name:'tarea',completed:false,date:'default'},
{name:'llamar a mamá',completed:false,date:'default'},
{name:'salir a correr',completed:false,date:'default'},
{name:'meditar',completed:false,date:'default'}];

function Home () {

    //search var state
    let [search,setSearch] = useState("");
    //searched shores state
    let [toDoSerched,setToDoSerched] = useState(todo);

    return (
        <>
            <header>
                <Header/>
            </header>
            <main>
                <div className="input-container">
                    <Search toDoSerched={toDoSerched} setToDoSerched={setToDoSerched}
                    search={search} setSearch={setSearch}  />
                </div>
                <section className="todo-container">
                    <ul>
                    {toDoSerched.map((item) => <li><ToDo name={item.name}/></li>)}
                    </ul>
                    
                </section>
            </main>
        </>
    )
};

export {Home};