import { Route, Routes } from "react-router-dom"
import Page1 from "./assets/pages/page1"
import Page2 from "./assets/pages/page2"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Page1 />} />
        {/* <Route path="/page2/:id" element={<Page2 />} /> */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </>
  )
}

export default App
