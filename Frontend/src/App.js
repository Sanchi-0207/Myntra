import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar";
import OutfitMaker from "./Components/OutfitMaker";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Women from "./Components/Women/Women";
import ProductInfo from "./Components/ProducInfo/ProductInfo";
import Community from "./Components/Community/community"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
          <Route path="/outfitmaker" element={<OutfitMaker />} />
        <Route path="/womensection" element={<Women/>} />
        <Route path="/productinfo/:id" element={<ProductInfo/>} />
        <Route path="/community" element={<Community/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
