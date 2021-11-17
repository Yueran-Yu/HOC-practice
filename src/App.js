import './App.scss';
import UserProfile from "./components/user-profile/user-profile.component";
import UserList from './components/user-list/user-list.component';

function App() {
  return (
    <div className="App">
      <UserList dataSource='https://jsonplaceholder.typicode.com/users'/>
      <UserProfile name='Grace' email='123@gmail.com' dataSource='https://jsonplaceholder.typicode.com/posts'/>
    </div>
  );
}

export default App;

// Components are just functions and classes that receive some props and then returns us some mark up
// HOC: is just a function that gets a component and returns us a new enhanced component
