import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donation from "./pages/Donation";
import BecomeMember from "./pages/BecomeMember";
import Main from "./pages/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/become-member" element={<BecomeMember />} />
      </Routes>
    </Router>
  );
}
export default App;
