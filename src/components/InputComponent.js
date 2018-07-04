import React from 'react';

export default class InputComponent extends React.Component {
    state = {taskInfo:""};

    constructor(props) {
        super(props);        
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeHandler(event) {
        this.setState({taskInfo: event.target.value});
    }

    onClickHandler(taskInfo) {
        if (taskInfo.length > 0) {
            this.props.addTask(taskInfo);
            this.setState({taskInfo:""});
        }
    }

    render() {
        return(
            <div className="input-group">
                <input type='text' className="form-control" onChange={this.onChangeHandler} value={this.state.taskInfo} placeholder='Enter your Todo Item'/>
                <button className='btn btn-primary' onClick={() => this.onClickHandler(this.state.taskInfo)}>Add Todo</button>
            </div> 
        )
    }
}
