import React from 'react';
export default class Section extends React.Component {
  render () {
    let editName = this.props.editName;
    let editingIndex = this.props.editingIndex;
    let toggleAll = this.props.toggleAll;
    const listItems = this.props.list.map((item, index) => {
      return (<li key={item.id} className={[item.flag ? '' : 'completed', editingIndex === index ? 'editing' : ''].join(' ')}>
        <div className="view">
          <input checked={!item.flag} onChange={() => this.props.handleItemChangeFlag(index)} className="toggle" type="checkbox" />
          <label onDoubleClick={() => this.props.editingItem(index)}>{item.name}</label>
          <button className="destroy" onClick={() => this.props.delListItem(index)}></button>
        </div>
        <input className="edit" ref={(input) => { this.textInput = input }} value={editName} onKeyDown={() => this.props.handleEditName(index)} onChange={(event) => this.props.handleAddNameChange(event, 'editName')} />
      </li>)
    })
    return (
      <section className="main">
        <input checked={toggleAll} id="toggle-all" className="toggle-all" type="checkbox" onChange={() => this.props.hanleToggleAll()} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {listItems}
        </ul>
      </section>
    )
  }
}