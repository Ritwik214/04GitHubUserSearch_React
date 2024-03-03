import React from 'react';

const UserDetail = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <img style={{height: '150px',width: '150px', borderRadius:'150px'}} src={user.avatar_url} alt="User Avatar" />
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
      <p>
        <strong>Followers:</strong> {user.followers}
      </p>
      <p>
        <strong>Followings:</strong> {user.following}
      </p>
      <p>
        <strong>GitHub Link:</strong> <a href={user.html_url} target="_blank" rel="noopener noreferrer">{user.login}</a>
      </p>
    </div>
  );
};

export default UserDetail;
