import './App.css';
import Banner from './components/Banner/Banner';
import GroupsHeader from './components/GroupsHeader/GroupsHeader';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <GroupsHeader />

    </div>
  );
}

export default App;
