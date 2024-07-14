import React from "react";
import AdminMenu from "../../component/Layout/AdminMenu";
import Layout from "../../component/Layout/Layout";
import { verifyToken } from "../Auth/verifyToken";

const AdminDashboard2 = () => {
    const {name, email} = verifyToken()
    return (
        <Layout>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    {" "}
                    <div className="col-md-3">
                        <AdminMenu />
                    </div>
                    <div className="col-md-9">
                        <div className="card w-75 p-3">
                            <h3> Admin Name : {name ? name : "Admin"}</h3>
                            <h3> Admin Email : {email ? email : ""}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AdminDashboard2;
