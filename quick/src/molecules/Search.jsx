//temporal:
const todo = [{name:'comer',completed:false,date:'default'},
{name:'tarea',completed:false,date:'default'},
{name:'llamar a mamá',completed:false,date:'default'},
{name:'salir a correr',completed:false,date:'default'},
{name:'meditar',completed:false,date:'default'}];


function Search ({search,setSearch,toDoSerched,setToDoSerched}) {

    //services:
    //1 watch search var changes //2 show searched shores(todo)
    let watchSearch = (event) => { 
        //1
        setSearch(event.target.value)
    //2
        let shoresFiltered = todo.filter( e => {
            const toDoLC = e.name.toLowerCase();
            const searchLC = event.target.value.toLowerCase();
            return toDoLC.includes(searchLC);
        });
        setToDoSerched(shoresFiltered);
};

    return(
        <>
        <textarea onChange={watchSearch}  type="text" placeholder='¿buscas una tarea? escribela aqui'  />
        </>
    )
};
export {Search};