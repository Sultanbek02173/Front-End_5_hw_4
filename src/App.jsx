import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main, Navbar, Posts, Details } from "./pages";
import { Suspense, lazy, useState } from "react";
import UsersDetails from "./pages/UsersDetails/UsersDetails";
import PostsDetails from "./pages/PostsDetails/PostsDetails";

const UsersLazy = lazy(() => import('./pages/Users/Users'))

function App() {

  const [link, setLink] = useState('');

  return (
    <Router>
      <Routes>
        <Route element={<Navbar />} path="/">
          <Route path="/" element={<Main link={link} setLink={setLink} />}></Route>
          <Route path="/details" element={<Details link={link} />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/users" element={
          <Suspense fallback={<div>loading...</div>}>
            <UsersLazy/>
          </Suspense>}>
            
          </Route>

            <Route path="/users/:id" element={<UsersDetails />} />
            <Route path="/posts/:id" element={<PostsDetails />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
