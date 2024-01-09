import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './pages/Jobs';
// import NewUpdate from './pages/NewUpdate';

export default function JobsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs/>} />
      </Routes>
    </BrowserRouter>
  );
}