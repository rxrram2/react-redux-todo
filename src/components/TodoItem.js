import React from 'react';

export default class TodoItem extends React.Component {
    state = {
        isEditing: false,
        taskInfo: ""
    };

    constructor(props) {
        super(props);
        this.state.taskInfo = props.todo.task;        
    }

    editTask(evt, id) {
        evt.preventDefault();
        this.setState({isEditing: true,taskInfo: this.props.todo.task});
    }

    onChangeHandler(event) {
        this.setState({isEditing: true, taskInfo: event.target.value});
    }

    onClickHandlerEdit(event) {
        event.preventDefault();
        var todo = this.props.todo;
        todo.task = this.state.taskInfo;
        this.props.updateTask(todo);
        this.setState({isEditing:false, taskInfo: todo.task});
    }

    render() {        
        var mystyle = {
            fontSize: '48px',
            color: 'green'
        };
    
        return(
            <li onDoubleClick={(e)=> this.editTask(e,this.props.id)} className="list-group-item">
                {this.state.isEditing ? 
                <div className="input-group">
                    <input id="editText" className="form-control" type='text' onChange={this.onChangeHandler.bind(this)} value={this.state.taskInfo}/>
                    <i onClick={(e) => this.onClickHandlerEdit(e)} className="fa fa-check-circle float-right" style={mystyle} aria-hidden="true"></i>
                </div>
                :
                <div>
                <span className="float-left">{this.props.todo.task}</span>
                <div className="float-right">
                    <button className="btn btn-xs btn-danger img-circle" 
                        onClick={(e) => this.props.deleteTask(this.props.id)}>X</button>
                </div>
                </div>}
            </li>           
        )
    }
}