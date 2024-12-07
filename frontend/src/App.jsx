import Home from "./Components/Home/Home"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import DynamicPage from "./Pages/DynamicPage/DynamicPage"
import NotFoundPage from "./Not Found/NotFound"

function App() {
  return (
    <>
      <Routes>

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:urlName" element={<DynamicPage />} />
        </Route>
        <Route path="/notFound" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/notFound" />} />


      </Routes>
    </>
  )
}

export default App