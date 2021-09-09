import './App.css';
import store from '../src/components/store';
import {
  bugAdded,
  bugRemoved,
  bugResolved
} from '../src/components/actionCreators';

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState());
  });
  store.dispatch(bugAdded('Bug_1', true));

  store.dispatch(bugResolved(1));

  store.dispatch(bugRemoved(1));

  console.log(store.getState());

  unsubscribe();

  return (
    <div className='App'>
      <h1>Hello Redux</h1>
    </div>
  );
}

export default App;
