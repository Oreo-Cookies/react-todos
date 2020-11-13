import React from 'react';
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddNameChange = this.handleAddNameChange.bind(this);
  }
  handleAddNameChange (e) {
    this.props.handleAddNameChange(e, 'todoName')
  }
  render () {
    let todoName = this.props.todoName;
    return (
      <header className="header">
        <h1>todos</h1>
        <input value={todoName} onChange={this.handleAddNameChange} onKeyDown={() => this.props.addList()} className="new-todo" placeholder="What needs to be done?" autoFocus={true} />
      </header>
    )
  }
}
