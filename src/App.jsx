import { useState, useEffect } from 'react';
import {Link, useLocation, Routes, Route, useParams} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';
import Posts from './Posts';

const Post = ({posts}) => {
  const params = useParams();
  const id = params.id*1;
  const post = posts.find( post => post.id === id);
    return (
      <div>
        <h1>Description of Post</h1>
          <li>
            {post.body}
          </li>
      </div>
    );
};

function App() {
  const [ users, setUsers ] = useState([]);
  const [ posts, setPosts ] = useState([]);
  const location = useLocation();
  const {pathName} = location;

  useEffect(() => {
    const fetchUsers = async() => {
      const data = await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
      const userData = await data.json()
      setUsers(userData)
    };
    fetchUsers();
  },[]);

  useEffect(() => {
    const fetchPosts = async() => {
      const data = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts");
      const postData = await data.json();
      setPosts(postData);
    };
    fetchPosts();
  },[])

  return (
    <>
      <nav>
          <Link to='/' className={pathName === '/' ? 'selected': ''}>Home</Link>
          <Link to='/users' className={pathName === '/users' ? 'selected': ''}>Users ({users.length})</Link>
          <Link to='/posts' className={pathName === '/posts' ? 'selected': ''}>Posts ({posts.length})</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/users' element={ <Users users={users}/>} />
        <Route path='/posts' element={ <Posts posts={posts}/>} />
        <Route path='/posts/:id' element={ <Post posts={posts}/>} /> 
      </Routes>
    </>
  )
}

export default App

/*<Route path='/users/:id' element={ <Users users={users}/>} />*/