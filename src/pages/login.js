import React from 'react';
  
const Login = () => {
  return (
    <div>
      <form>
          <label for="user">Username:</label>
          <input type="text" id="user" name ="user"/><br></br>
          <label for="password">Password:</label>
          <input type="text" id="password" name = "password"/><br></br>
          <input type = "submit" value = "Submit"></input>
        </form>
    </div>
  );
};
  
export default Login;