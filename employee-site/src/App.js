import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Homepage';

function App() {
   let employees = [
    {
      name: "James King",
      title: "CEO",
      databaseId: 123412342134123512312343124
    },
    {
      name: "Sarah Sar",
      title: "CTO"
    },
    {
      name: "Jessie Sar",
      title: "desk worker"
    }
  ]
  return (
    <div className="App">
      <HomePage employees={employees} />
    </div>
  );
}

export default App;
