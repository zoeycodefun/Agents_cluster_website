import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/layout";
import UniversalAgentsPage from "./pages/universal_agents_page";
import { categories } from "./configs/app_config";

function App(): React.ReactElement {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route
          path="/"
          element={<Layout />}
          >
            <Route index element={<Navigate to={categories[0].path} replace />} />
            {categories.map((category) => (
              <Route
              key={category.id}
              path={category.path.replace('/','')}
              element={<UniversalAgentsPage category={category} />}
              />
            ))}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App;
