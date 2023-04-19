import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CatDetail from "./pages/CatDetail";
import CatList from "./pages/CatList";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col px-8 sm:px-12 md:px-16 overflow-y-auto">
      <BrowserRouter>
        <div className="flex flex-col py-4 gap-2">
          <Navbar />

          <Routes>
            <Route path="/" element={<Main />} />

            <Route path="/breed/:id" element={<CatDetail />} />

            <Route path="/topbreed" element={<CatList />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
