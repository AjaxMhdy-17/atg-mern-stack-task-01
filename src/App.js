import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Index2 from "./components/Index2";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Index
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          }
        />
        <Route
          path="index2"
          element={
            <Index2
              show={show}
              handleClose={handleClose}
              handleShow={handleShow}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
