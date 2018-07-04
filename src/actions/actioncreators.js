import {actionTypes} from './constants';

export const actions = {
    addTask: taskInfo => ({
        type: actionTypes.ADD_TASK,
        taskInfo
    }),
    deleteTask: id => ({
        type: actionTypes.DELETE_TASK,
        id
    }),
    updateTask: task => ({
        type: actionTypes.UPDATE_TASK,
        task
    })
};