import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageDownload from "./Pages/PageDownloand.jsx"
import PageSubscription from "./Pages/PageSubscription.jsx";
import Login from "./Pages/PageLogin.jsx";
import Registration from "./Pages/PageRegistration.jsx";


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageDownload />}></Route>
          <Route path="/Download" element={<PageDownload />}></Route>
          <Route path="/Subscription" element={<PageSubscription />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
        </Routes>
    </BrowserRouter>
  )
}