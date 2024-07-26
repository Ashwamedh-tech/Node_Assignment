import { Link } from 'react-router-dom';
import './App.css'
import Button from '@mui/material/Button';

function App() {

  return (
    <>
    <h3>If already a user</h3>
      <Link to="/login">
        <Button variant="contained">Log-IN</Button>
        </Link>&nbsp;&nbsp;&nbsp;
        <h3>If a new user</h3>
        <Link to="/register">
        <Button variant="contained">SIGN-UP</Button>
        </Link>
    </>
  )
}

export default App
