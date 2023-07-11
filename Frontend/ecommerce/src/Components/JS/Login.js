import { Button, Checkbox, Form, Input } from 'antd';
import React, { useState } from 'react';
import '../CSS/Login.css';


const Login = () => {

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
 
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", JSON.stringify(user.username));
    localStorage.setItem("password", JSON.stringify(user.password));
    console.log(localStorage.getItem("username"));
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className="login">
      <Form name="basicform">
        <Form.Item
          label="Username"
          rules={[{ required: true, message: "Please enter username" }]}
        >
          <Input
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </Form.Item>
        <Form.Item
          label="Password"
          rules={[{ required: true, message: "Please enter username" }]}
        >
          <Input
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Item>
        <Form.Item>
          <Button type="success" htmlType="submit" onClick={onSubmit}>
            Submit Username
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;
