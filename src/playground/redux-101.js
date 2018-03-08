import {createStore} from 'redux';

//Action generations - function that returns action objects


const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({setTo = 100} = {}) => ({
  type: 'SET',
  setTo
})

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or change

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return  {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return  {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return  {
        count: 0
      }
    case 'SET':
      return {
        count: action.setTo
      }
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({setTo:200}));
