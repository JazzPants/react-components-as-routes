import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import Messages from './Messages'
import Signup from './Signup'
// Step 1. Import react-router functions and Navlink
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Route component has two props, path and "component prop" as you can see in the Route component at the bottom
//when the URL matches this specified path, render this specified component

/* Add basic styling for NavLinks */


/* add the navbar component */
// const Navbar = () =>
//   <div>
//     <NavLink
//       to="/"
//       /* set exact so it knows to only set activeStyle when route is deeply equal to link */
//       exact
//       /* add styling to Navlink from previously declared constant "link"*/
//       style={link}
//       /* add prop for activeStyle */
//       activeStyle={{
//         background: 'purple'
//       }}
//     >Home</NavLink>
//     <NavLink
//       to="/about"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >About</NavLink>
//     <NavLink
//       to="/login"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >Login</NavLink>
//         <NavLink
//       to="/signup"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >Sign Up</NavLink>
//             <NavLink
//       to="/messages"
//       exact
//       style={link}
//       activeStyle={{
//         background: 'purple'
//       }}
//     >Messages</NavLink>
//   </div>;

// //arrow function without return
// const Home = () => <h1>Home!</h1>

// //arrow function with return
// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };

// const Login = () =>
//   <form>
//     <h1>Login</h1>
//     <div>
//       <input type="text" name="username" placeholder="Username" />
//       <label htmlFor="username">Username</label>
//     </div>
//     <div>
//       <input type="password" name="password" placeholder="Password" />
//       <label htmlFor="password">Password</label>
//     </div>
//     <input type="submit" value="Login" />
//   </form>;



ReactDOM.render((
  <Router>
    <div>
      <Navbar /><br></br>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/messages" component={Messages} />
    </div>
  </Router>),
  document.getElementById('root')
);
