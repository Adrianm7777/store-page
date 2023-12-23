import DeliveryPage from "./Pages/DeliveryPage";
import Layout from "./Pages/Layout";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/" element={<Layout />}>
            <Route path="mcdelivery" element={<DeliveryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
