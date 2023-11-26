import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Navbar, Posts } from "./pages";
import { Suspense, lazy, useState } from "react";

const UsersLazy = lazy(() => import('./pages/Users/Users'))

function App() {

  const [link, setLink] = useState('');

  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} path="/">
          <Route path="/" element={<Main link={link} setLink={setLink} />}></Route>
          <Route path="/posts" element={<Posts link={link} />}></Route>
          <Route path="/users" element={
          <Suspense fallback={<div>loading...</div>}>
            <UsersLazy/>
          </Suspense>}>
            
          </Route>

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
