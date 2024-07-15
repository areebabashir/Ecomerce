import React from "react";
import Layout from "../../component/Layout/Layout";
import UserMenu from "../../component/Layout/UserMenu";
import { verifyToken } from "../Auth/verifyToken";
const Dashboard = () => {

    const { name, email } = verifyToken()
    return (
        <Layout title={"Dashboard - Ecommerce App"}>
            <div className="container-flui m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3>{name}</h3>
                            <h3>{email}</h3>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;