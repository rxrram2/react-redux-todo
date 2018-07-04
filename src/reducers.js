import {actionTypes} from './actions/constants';

const initState = {todos: [
    {id: 0, task: "Pick up kids"},
    {id: 1, task: "Get Haircut done"}
], id: 2};

export const TasksReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TASK:
        {
            let todos = state.todos;
            let newId = state.id + 1;
            let newTodos = [...todos, {id: state.id, task: action.taskInfo}];    
            return {
                todos: newTodos,
                id: newId
            }
        }
        case actionTypes.DELETE_TASK:
        {
            let currTodos = state.todos.slice();
            let newTodos = currTodos.filter((todo) => todo.id !== action.id);
            return {
                todos: newTodos,
                id: state.id
            }
        }
        case actionTypes.UPDATE_TASK:
        {
            let todos = state.todos.slice();
            todos[todos.findIndex(e1 => e1.id === action.task.id)] = action.task;
            return {
                todos: todos,
                id: state.id
            }
        }
    
        default:
            return state;            
    }
};