import React, { useState } from "react";

import UserSearchForm from "./components/UserSearchForm";
import UserDetail from "./components/UserDetail";
import { getUserData } from "./services/github";


function App(){
  const [user, setUser] = useState(null);
  const handleSearch = async (username) => {
    try{
      const userData = await getUserData(username);
      setUser(userData);
    }catch(error){
      console.error('Error fetching user data', error);
      setUser(null);
    }
  };
    return (
      <div>
        <h1>Github User Search</h1>
        <UserSearchForm onSearch={handleSearch} />
        {user && <UserDetail user={user}/>}
      </div>
    );
  }
export default App;