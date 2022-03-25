import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Locators } from "./components/Locators/Locators";
import { Counter } from "./components/Counter/Counter";
import { Todos } from "./components/Todos/Todos";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Main />}>
            <Route path="" element={<Navigate to="/locators" />} />
            <Route path="locators" element={<Locators />} />
            <Route path="counter" element={<Counter />} />
            <Route path="todos" element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
