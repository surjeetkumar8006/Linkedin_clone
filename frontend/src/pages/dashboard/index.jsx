import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getAllPosts } from '@/config/redux/action/postAction';
import { getUserProfile } from '@/config/redux/action/authAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loggedIn, isLoading: authLoading, user, profile } = useSelector((state) => state.auth);
  const { items: posts = [], loading: postLoading } = useSelector((state) => state.posts);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const token = localStorage.getItem('token');
    if (!token || !loggedIn) {
      router.replace('/login');
    } else {
      dispatch(getUserProfile());
      dispatch(getAllPosts());
    }
  }, [loggedIn, dispatch, router]);

  if (authLoading || !isClient) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Dashboard || My App</title>
      </Head>
      <div style={{ padding: '20px' }}>
        <h1>Welcome, {user?.name || 'User'}</h1>

        <h2>Your Profile</h2>
        <p><strong>Name:</strong> {user?.name || 'N/A'}</p>
        <p><strong>Email:</strong> {user?.email || 'N/A'}</p>
        <p><strong>Username:</strong> {user?.username || 'N/A'}</p>
        <p><strong>Bio:</strong> {profile?.bio || 'N/A'}</p>
        <p><strong>Current Post:</strong> {profile?.currentPost || 'N/A'}</p>

        <h3>Work Experience</h3>
        {profile?.workExperience?.length > 0 ? (
          profile.workExperience.map((exp) => (
            <div key={exp._id}>
              <p><strong>Company:</strong> {exp.company}</p>
              <p><strong>Position:</strong> {exp.position}</p>
              <p><strong>Years:</strong> {exp.years}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No work experience found.</p>
        )}

        <h3>Past Work</h3>
        {profile?.pastWork?.length > 0 ? (
          profile.pastWork.map((job) => (
            <div key={job._id}>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Position:</strong> {job.position}</p>
              <p><strong>Years:</strong> {job.years}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No past work found.</p>
        )}

        <h3>Education</h3>
        {profile?.education?.length > 0 ? (
          profile.education.map((edu) => (
            <div key={edu._id}>
              <p><strong>School:</strong> {edu.school}</p>
              <p><strong>Degree:</strong> {edu.degree}</p>
              <p><strong>Field:</strong> {edu.fieldOfStudy}</p>
              <hr />
            </div>
          ))
        ) : (
          <p>No education info found.</p>
        )}

        <h2>Your Posts</h2>
        {postLoading ? (
          <p>Loading posts...</p>
        ) : posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
