# React Videos - Notes

### State, Props & JSX

- every component has a render function
- in component render needs return

```
render()
return < Component 2 />
```

Component 2 is child of Componenet 1

#### State
Anything you're keeping track of
Every component has its own state or can have have them.
#### Prop
portion of state that is passed down from parent to child component



****
## __Component 1__
```
state { color: green }
```
```
render()
return <Component 2 color = { this.state.color}
```
-component 2 would like to know about the color state of color.
- every component is a big JS object
- state object

## __Component 2__
```
state
```
```
render()
  <div.{this.props.color}</div>
```
- hold state in parent, as high up as possible
- anything that needs it will be child component

## React Dev Tools
Errors...
Want to put everything in the return statement.

Devtool toolbar says 'React' tab
Will shows Props and State

## Props - (properties)
A way to pass data to pass components to be used to render onto the DOM.

```
var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  render:function(){
    return(
      <div>
        <p><strong>Cheese name: </strong> {this.props.cheese.name}</p>
        <p><strong>Cheese smellfactor: </strong> {this.props.cheese.smellFactor}</p>
        <p><strong>Cheese name: </strong> {this.props.cheese.price}</p>
      </div>
      );
    }
  });

  var myChees = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};

  //put component into html page
  React.DOM.render(<TodoCompenent mssg="I like cheese" cheese={myCheese} />, document.getElementById('root'));
```
### Props 2
Prop types - define outside of the function


```
Home.propTy;es = {
  name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.ProtoTypes.object
    children: React.PropTypes.element.isRequired
};
```
## State
Define state within component, access state in component

```
var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['washup, 'eat some cheese', 'take a nap'],
      age: 28
    }
  }
  render: function(){
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
        <ListComponent todos={this.state.todos} />  
      </div>
      );
    } // render
  });

  var myChees = {name: 'Camembert', smellFactor: 'Extreme pong', price: '3.50'};

  //put component into html page
  React.DOM.render(<TodoCompenent mssg="I like cheese" cheese={myCheese} />, document.getElementById('root'));
```
### Questions
<ListComponent todos={this.state.todos} />

### Stateless Componets
- anytime use

### Stateless Functional Components
- anytime use
- No state
- shallow as far as componenets
- good

### Stateless Components 2 - Maximillian
- Use state carefully
- (redux-no state management)
- stateless means that the componant has no access to state

### Parent Child Relationships
- pass data from parent to child
- can use props by going from child to parent
- pass references from parent to child
- (don't put logic all in the render() function ()
- super() if extending from a class??

### 'Two-Way-Binding' - concept but not proper term
- output value of current text (of the link)
- Not TWo Way (
    - Actions up, Data Down
  )

### ....
- state is something which can be changed self
- props must be changed outsite

****
### React JS

#### Virtual DOM
- uses, compares to DOM, changes only part that was changed

### Lifecycle Methods
- when componant is loded in app, first componant called:
  - componentWillMount - immediatly before initial rendering
  - componentDidMount - after initial render
  - componenetWillReceiveProps - when componenet receives new props
  - shouldComponenetUpdate - before render, after receiving new propos or state
  - compnenetWillUpdate - before rendering, after receiving new props
  - componentDidUpdate -
  - componenetWillUnmount - 
