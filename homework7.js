import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
interface User{
name: string,
email: string,
address: {
  city: string,
  zipcode: string
}
}

function App() {
  const [users, setUsers] = useState<any>()
  const menu:any = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Contact",
      link: "/contact"
    }
  ]
  const fetchData = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    setUsers(data)
  }
  return (
    <div className="App">
      <>
      <Header menu = {menu}/>
      </>
      <h1>User Profile</h1>
      {
        users?.map((user:any,i:any)=>(
          <div className="user" style={{border:"1px solid black"}} key={i}>
            <h3>Name: {user.name}</h3>
            <h3>Email: {user.email}</h3>
            <h3>City: {user.address.city}</h3>
            <h3>Zipcode: {user.address.zipcode}</h3>
          </div>
        ))
      }
      <button onClick={fetchData}>
        Fetch Data
      </button>
    </div>
  );
}

export default App;

//t2
import React, { useState } from 'react';
import './App.css';

interface User{
  name: string,
  email: string,}
function App(){
  const [users, setUsers] = useState<any>()
  

const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const comments = await response.json();
  console.log(comments);
  setUsers(comments);
}
return (
  <div className="App">
    <h1>User Comments</h1>
  {
      users?.map((user:any,i:any) => (
        <div key={i} className="user">
          <h3>ID:{user.id}</h3>
          <h3>User:{user.userId}</h3>
          <h3>Title:{user.title}</h3>
          <h3>Body:{user.body}</h3>
        </div>
      ))
    }
    <button onClick={(fetchComments)}>
      Fetch Data
    </button>
  </div>
)};



export default App;


//a1
import React, { useState } from 'react';
import './App.css';
interface User{
  name: string,
  email: string,}
function App(){
  const [users, setUsers] = useState<any>()
  

const fetchComments = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await response.json();
  console.log(comments);
  setUsers(comments);
}
return (
  <div className="App">
    <h1>User Comments</h1>
  {
      users?.map((user:any,i:any) => (
        <div key={i} className="user">
          <h3>ID:{user.id}</h3>
          <h3>Name:{user.name}</h3>
          <h3>E-Mail:{user.email}</h3>
          <h3>Body:{user.body}</h3>
        </div>
      ))
    }
    <button onClick={(fetchComments)}>
      Fetch Data
    </button>
  </div>
)};



export default App;


//a2
//app.tsx
import React, { useState } from 'react';
import './App.css';
import UserCard from './component/header/UserCard';
interface user{
    id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
}
function App(){
  const [users, setUsers] = useState<any>()
  

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  setUsers(data);
}
return (
  <div className="App">
    <h1>User Comments</h1>
  {
      users?.map((user:any,i:any) => (
        <div key={i} className="user">
          <h3>ID:{user.id}</h3>
          <h3>Name:{user.name}</h3>
          <h3>UserName:{user.username}</h3>
          <h3>E-Mail:{user.email}</h3>
          <h3>Body:{user.body}</h3>
          <h3>Phone:{user.phone}</h3>
          <h3>Website:{user.website}</h3>
          
        </div>
      ))
    }
    <button onClick={(fetchUsers)}>
      Fetch Data
    </button>
  </div>
)};

export default App;

//a2
//UserCard.tsx
import React from 'react';
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
const UserCard: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div style={styles.card}>
      <h2>{user.name}</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
    </div>
  );
};

// Add some basic inline styles
const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    margin: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default UserCard;
