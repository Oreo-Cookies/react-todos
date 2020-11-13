import React from 'react';
import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default class App extends React.Component {

  constructor(prop) {
    super(prop);
    this.focus = this.focus.bind(this);
    this.handleAddNameChange = this.handleAddNameChange.bind(this);
    this.addList = this.addList.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleItemChangeFlag = this.handleItemChangeFlag.bind(this);
    this.editingItem = this.editingItem.bind(this);
    this.delListItem = this.delListItem.bind(this);
    this.handleEditName = this.handleEditName.bind(this);
    this.handleAddNameChange = this.handleAddNameChange.bind(this);
    this.handleClearCompleted = this.handleClearCompleted.bind(this);
    this.hanleToggleAll = this.hanleToggleAll.bind(this);
    this.state = {
      todoName: '',
      status: 'all',
      list: [
        {
          id: 1,
          name: '11111',
          flag: true
        },
        {
          id: 2,
          name: '2222',
          flag: false
        },
        {
          id: 3,
          name: '3333',
          flag: true
        },

      ],
      toggleAll: false,
      editingIndex: null,
      editName: ''
    }
  }

  addList () { // 添加行
    if (window.event.keyCode !== 13) return;
    let list = [...this.state.list];
    list.push({
      id: list[list.length - 1].id + 1,
      name: this.state.todoName,
      flag: true
    })
    this.setState({
      list,
      todoName: ''
    })
  }

  delListItem (index) { // 删除行
    let list = [...this.state.list];
    list.splice(index, 1);
    this.setState({ list })
  }

  handleItemChangeFlag (index) { // 切换行状态
    let list = [...this.state.list];
    list[index].flag = !list[index].flag;
    this.setState({ list })
  }

  handleChangeState (status) { // 切换展示状态
    this.setState({ status })
  }

  hanleToggleAll () { // 切换全部状态
    let list = [...this.state.list];
    list.map(item => item.flag = this.state.toggleAll)
    this.setState({
      toggleAll: !this.state.toggleAll,
      list
    })
  }

  editingItem (index) { // 编辑行
    let editName = this.state.list[index].name;
    this.setState({
      editingIndex: index,
      editName
    })
  }

  handleEditName (index) {
    if (window.event.keyCode === 27) {
      this.setState({
        editingIndex: null,
      })
      return;
    }
    if (window.event.keyCode !== 13) return;
    let list = [...this.state.list];
    list[index].name = this.state.editName;
    this.setState({
      editingIndex: null,
      list
    })
  }

  handleClearCompleted () { // 清除已完成
    let list = [...this.state.list];
    list = list.filter(item => item.flag);
    this.setState({ list });
  }

  handleAddNameChange (e, name) { // 头部input交互
    this.setState({
      [name]: e.target.value
    })
  }

  focus () {
    // 直接使用原生 API 使 text 输入框获得焦点
    this.textInput.focus();
  }

  render () {
    let list = [...this.state.list];
    let itemsLength = list.filter(item => item.flag).length;
    switch (this.state.status) {
      case 'Active':
        list = list.filter(item => item.flag);
        break;
      case 'Completed':
        list = list.filter(item => !item.flag);
        break;
      default:
        break;
    }
    return (
      <div>
        <section className="todoapp">
          <Header
            handleAddNameChange={this.handleAddNameChange}
            todoName={this.state.todoName}
            addList={this.addList}
          ></Header>
          <Section
            list={list}
            editName={this.state.editName}
            editingIndex={this.state.editingIndex}
            toggleAll={this.state.toggleAll}
            hanleToggleAll={this.hanleToggleAll}
            handleItemChangeFlag={this.handleItemChangeFlag}
            editingItem={this.editingItem}
            delListItem={this.delListItem}
            handleEditName={this.handleEditName}
            handleAddNameChange={this.handleAddNameChange}
          ></Section>
          <Footer
            status={this.state.status}
            itemsLength={itemsLength}
            handleChangeState={this.handleChangeState}
            handleClearCompleted={this.handleClearCompleted}
          ></Footer>
        </section>
      </div>
    )
  }
}