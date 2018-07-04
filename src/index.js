import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {loadData, saveData} from './localStorage';
import './index.css';
//import App from './App';
import {AppList} from './App';
import {TasksReducer} from './reducers';
import registerServiceWorker from './registerServiceWorker';

const persistedData = loadData();
const store = createStore(
    TasksReducer,
    persistedData.todoData
);

store.subscribe(() => {
    saveData({
        todoData: store.getState()
    });
});

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
        <AppList/>
    </Provider>,        
    document.getElementById('root')
);
registerServiceWorker();
