
// Recordar que el useReducer devuelve siempre un arreglo nuevo, nunca mutar o modificar el ya existente
export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            // para este caso el payload trae el objeto entero del nuevo todo
            return [ ...initialState, action.payload ]
        
        case '[TODO] Remove Todo':
            // para este caso, el payload trae solo el Id del todo a eliminar
            return  initialState.filter(todo => todo.id !== action.payload);

        case '[TODO] Toggle Todo':
            // para este caso, el payload trae solo el Id del todo a eliminar
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }

                return todo;
            });

        default:
            return initialState;
    }
}