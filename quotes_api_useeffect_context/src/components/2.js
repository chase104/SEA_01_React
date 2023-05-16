import React, { useState } from 'react';

const UserList = ({ users }) => {
  const [searchString, setSearchString] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchString.toLowerCase())
  );

  const handleSearchChange = event => {
    setSearchString(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchString} onChange={handleSearchChange} />
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;



