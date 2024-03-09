import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home/HomePage';
import PostPage from './pages/post/PostPage';
import UserPosts from './pages/user-posts/UserPosts';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/post/:id' element={<PostPage />} />
      <Route path='/user-posts/:id' element={<UserPosts />} />
    </Routes>
  )
}

export default App;
