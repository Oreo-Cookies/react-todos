import React from 'react';
export default class Footer extends React.Component {
  render () {
    let itemsLength = this.props.itemsLength;
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{itemsLength}</strong> item left</span>
        <ul className="filters">
          <li>
            <a className={this.props.status === 'all' ? 'selected' : ''} href="#/" onClick={() => this.props.handleChangeState('all')}>All</a>
          </li>
          <li>
            <a className={this.props.status === 'Active' ? 'selected' : ''} href="#/active" onClick={() => this.props.handleChangeState('Active')}>Active</a>
          </li>
          <li>
            <a className={this.props.status === 'Completed' ? 'selected' : ''} href="#/completed" onClick={() => this.props.handleChangeState('Completed')}>Completed</a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.props.handleClearCompleted}>Clear completed</button>
      </footer>
    )
  }
}