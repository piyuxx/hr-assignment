import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import CardsList from './components/CardsList';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Sidebar />
        <CardsList />
      </Provider>
    </div>
  );
}

export default App;
