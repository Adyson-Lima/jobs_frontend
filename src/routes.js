import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jobs from './pages/Jobs';
import NewUpdate from "./pages/NewUpdate";

export default function JobsRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Jobs/>} />
        <Route path="/newupdate/:job_id" element={<NewUpdate/>}/>
      </Routes>
    </BrowserRouter>
  );
}