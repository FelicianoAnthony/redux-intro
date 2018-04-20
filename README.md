1. create skeleton of app
  > edit index.js & add Counter component
  > make Counter component 



2. yarn add redux react-redux
  > redux knows nothing about react
  > react-redux lets you connect pieces of state to React Components



3. in Counter, count displayed will receive count prop from Redux injection
  > this.props.count & not this.state.count
  > import { connect } from 'react-redux';
  > mapStateToProps function at bottom of Counter component 
  > export default connect(mapStateToProps)(Counter);



4. in index.js...
  > import { Provider } from 'react-redux';
  > create store, pass to Provider import, create reducer function to pass into store variable & set actions, set initial state  

    const initialState = {
      count:0
    }

    function reducer(state=initialState, action) {
      console.log(action, '-> from index.js')
        switch(action.type) {
          case 'INCREMENT':
            return {
              count: state.count+1
            };
          case 'DECREMENT':
            return {
              count: state.count -1
            };
          default:
            return state;
        } 
    }

    const store = createStore(reducer);


    const App = () => (
      <Provider store={store}>
        <Counter />
      </Provider>
    );



5. in Counter.js....
  > dispatch an action to the store to update sate through props?

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }
