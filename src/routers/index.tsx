import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashbpard/Dashboard";
import CheckAnswer from "../pages/CheckAnswer/CheckAnswer";
import Game from "../pages/Game/Dashboard";
import GetGift from "../pages/GetGift/GetGift";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/check-answer" element={<CheckAnswer />} />
      <Route path="/game" element={<Game />} />
      <Route path="/get-gift" element={<GetGift />} />
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRouter;
