// Dependent API Calls with useEffect
// Description: Create a component that displays a list of users. When a user is clicked, fetch and display their posts.

// Steps to needed:
//     - First useEffect : Fetches the user list.
//     - Second useEffect([selectedUserId]) : Fetches posts when a user is selected.
//     - Write your code within the file, by the name of component as Dependent_API_Call

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Ques_9_Dependent_API_Call = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingPosts, setLoadingPosts] = useState(false);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  // Fetch posts when selectedUserId changes
  useEffect(() => {
    if (selectedUserId === null) return;

    const fetchPosts = async () => {
      try {
        setLoadingPosts(true);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUserId}`);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoadingPosts(false);
      }
    };
    fetchPosts();
  }, [selectedUserId]);

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      <div>
        <h2>Users</h2>
        {loadingUsers ? (
          <p>Loading users...</p>
        ) : (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                <button onClick={() => setSelectedUserId(user.id)}>{user.name}</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>Posts</h2>
        {loadingPosts ? (
          <p>Loading posts...</p>
        ) : selectedUserId ? (
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <strong>{post.title}</strong>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Select a user to view posts.</p>
        )}
      </div>
    </div>
  );
};

export default Ques_9_Dependent_API_Call;
