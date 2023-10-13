import './assets/styles/index.css';
import Sample from './components/Sample';
import {Typography } from '@mui/material';
import Toast from './components/generics/Alert';

function App() {
  return (
    <>
    <h1 className="text-3xl font-bold underline bg-red-300">
    Formly Project
  </h1>
  <Typography variant='h1' component="span">This is h1</Typography>
  <Toast message = "This is sample toast!"/>
  <Sample/>
  </>
  )
}

export default App;
