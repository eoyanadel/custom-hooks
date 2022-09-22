import { useEffect } from 'react';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';


const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false
    } */
];


// Función de inicialización de mi arreglo de objetos todos, el cual lee el UseReducer al renderizar el compomente por 1era vez. Inicializa mi arreglo initialState
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodos = () => {
  
    // El useReducer llama a la funcion reducer todoReducer, la cual debe devolver siempre un nuevo arreglo, nunca mutar o modificar el ya existente
    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    // Cada vez qu mi arreglo de todos cambia, el useEffect se encarga de actualizarlos y renderizar de nuevo
    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])
    

    // Función que dispara el useReducer al agregar un nuevo objeto todo, llamando a mi hook (función) todoReducer que se encarga de devolver el nuevo arreglo de todos
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    // Función que dispara el useReducer para elminar un objeto de mi arreglo todos
    const handleDeleteTodo = (id) => {        
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {        
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    };
}
