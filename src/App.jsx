import Navbar from "components/navigation/Navbar/NavBar";
import NotFound from "components/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import Test from "./Test";

const Message = () => {
  return (
    <div>
      <div>첫번째 페이지입니다. App.jsx</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Message />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
