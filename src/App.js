import resources from './resources'
import Layout from "./components/Layout";
import {Route, Routes} from 'react-router-dom'
import Main from "./components/Main";
import ContentPage from './components/ContentPage';
import "./CSS/main.css"


function App() {
  return (
    <Routes>
      <Route element={<Layout />} >
          <Route index element={<Main resources={resources} />} />          
          <Route path=':slug' element={<ContentPage resources={resources} />}/>  
        </Route>     
    </Routes>
    );
}

export default App;
