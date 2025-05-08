import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoDetailPage from "./pages/VideoDetailPage";
import CategoryPage from "./pages/CategoryPage";
import SearchPage from "./pages/SearchPage";
import { Navigate } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoDetailPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
