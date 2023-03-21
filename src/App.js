import Layout from "./layouts";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;