import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoItems from './TodoItems';

class App extends Component {

  inputElement = React.createRef();

  constructor(){
    super();
      this.state = {
      items:[],
      currentItem:{text:'',key:''},
      }
  }

  handleInput = e => {
    const itemText = e.target.value
    const currentItem = { text:itemText, key: Date.now() }
    this.setState({
        currentItem,
    })
  };



  addItem = e  => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if(newItem.text !==''){
      console.log(newItem)
      const items = [...this.state.items,newItem] //getting the previous array of items
      this.setState({
          items:items,
          currentItem:{text:'',key:''}, //setting the currentitem array as empty input.
      })
    }

  };



  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => {return item.key !== key})
      this.setState({
          items:filteredItems,
      })

  }



  render() {
    return (
      <div className="App">
      <TodoList
       addItem={this.addItem} //handles the data on add hit
       inputElement = {this.inputElement} //to refer the element
       handleInput={this.handleInput} // to handle the input field on change
       currentItem = {this.state.currentItem}
      />
        <TodoItems entries={this.state.items} //bringing the item from setState of additems.
                   deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
