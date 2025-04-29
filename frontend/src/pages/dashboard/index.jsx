import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllPosts } from '@/config/redux/action/postAction';
import { getUserProfile } from '@/config/redux/action/authAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  // Redux state
  const { loggedIn, isLoading: authLoading, user } = useSelector((state) => state.auth);
  const { items: posts = [], loading: postLoading, error } = useSelector((state) => state.posts);

  const [isClient, setIsClient] = useState(false);  // To check if it's running on the client side

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem('token');
    console.log("Token from localStorage in Dashboard:", token);
    
    if (!token || !loggedIn) {
      router.replace('/login');
    } else {
      dispatch(getAllPosts());
      dispatch(getUserProfile());
    }
  }, [loggedIn, router, dispatch]);

  if (!isClient || authLoading || postLoading) return <div>Loading...</div>;

  if (error) return <div>Error loading posts: {error}</div>;

  if (!user || !user.name) return <div>No user profile available</div>;

  return (
    <>
      <Head>
        <title>Dashboard | My App</title>
      </Head>
      <div>
        <h1>Welcome, {user?.name || 'User'}</h1>
        <h2>Your Posts</h2>
        <ul>
          {posts.length === 0 ? (
            <li>No posts available</li>
          ) : (
            posts.map((post) => (
              <li key={post._id}>
                <strong>{post.title}</strong>
                <p>{post.content}</p>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
};

export default Dashboard;
