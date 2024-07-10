import React from 'react'
import Layout from "../component/Layout/Layout"
import { verifyToken } from './Auth/verifyToken';

const HomePage = () => {
    const {valid, name, email} = verifyToken()
    return (
      <Layout title={"Best offers "}>
        <h1>HomePage</h1>
        <pre>{valid ? name : ""}</pre>
        <pre>{valid ? email : ""}</pre>
      </Layout>
    );
  };
  
  export default HomePage;