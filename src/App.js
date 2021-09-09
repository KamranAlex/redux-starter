import './App.css';
import store from '../src/components/store';

function App() {
  const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState());
  });
  store.dispatch({
    type: 'bugAdded',
    payload: {
      description: 'bug-1',
      resolved: true
    }
  });
  unsubscribe();
  store.dispatch({
    type: 'bugRemoved',
    payload: {
      id: 1
    }
  });
  console.log(store.getState());
  return (
    <div className='App'>
      <h1>Hello Redux</h1>
    </div>
  );
}

export default App;
