import Catagory from "./components/Catagory";
import url from "./components/Link"
import title from "./components/Title";
import Content from "./components/Content";



function App() {
  return (
    <Content title={title} url={url} category={Catagory}/>  
    );
}

export default App;
