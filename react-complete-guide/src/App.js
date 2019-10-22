import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        //if the state changes it will lead react to re render or to update the DOM
        persons: [
            {name: 'Max', age: 28},
            {name: 'Manu', age: 29},
            {name: 'Stephe', age: 26}
        ], //managing array of person
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        //console.log('Was Clicked!');
        //dont do this -> this.state.persons[0].name = "Maxmilion"
        this.setState({persons: [
                {name: newName, age: 28},
                {name: 'Manu', age: 29},
                {name: 'Stephe', age: 27}
            ] }) //this method allows us to change the state and makes sure to update the dom and it will merge with the actual state
    }

  render() { //react will call this method to render something to the screen
      //<Person/> is a self closing tag
     return (
       <div className="App">
         <h1>Hi I'm a react app</h1>
         <p>This is working</p>
         <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch name</button> {/*in jsx its onCLick with capital C*/}
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}/>
           <Person
               name={this.state.persons[1].name}
               age={this.state.persons[1].age}
               click={this.switchNameHandler.bind(this,'Max!')}>My hobbies: Racing</Person>
          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}/>
       </div> //this part of code is jsx which looks like html
       // <p>This does not wrk</p>  as jsx can have only 1 root element
     );

     //the jsx gets compiled to the following code that is why it is not html but js only
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Does this works now?'));
  }
}

export default App;
