import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";
import "../../styles/Layout.css";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="container mt-4">
        <div className="admin-welcome">
          <h1>
            Welcome Admin{" "}
            <span className="admin-name text-success">{user?.name}</span>
          </h1>
          <h3>Manage LifeFlow App</h3>
          <hr />
          <div className="admin-message">
            <p>
              Welcome to the admin page of our Blood Bank app, an essential hub
              for our life-saving mission! We are truly delighted to have you
              on board as an administrator, as your role plays a pivotal part
              in the smooth functioning and success of our blood bank
              operations. Your dedication to ensuring a steady supply of blood
              for patients in need is both inspiring and indispensable.
            </p>
            <p>
              As an administrator, you will wield significant influence in
              orchestrating the intricate ballet of blood collection, storage,
              and distribution. Here, you will find a suite of powerful tools
              and comprehensive insights that will empower you to efficiently
              manage donors, monitor our blood inventory, and facilitate timely
              and critical blood transfusions.
            </p>
            <p>
              Your tireless commitment to this noble cause is nothing short of
              remarkable, and we wholeheartedly appreciate your steadfast
              support. Every pint of blood saved and every life impacted stands
              as a testament to your efforts. Together, we'll continue to make a
              profound difference in our community, helping patients in their
              times of need.
            </p>
            <p>
              Once again, we extend a warm and heartfelt welcome to our esteemed
              admin team. Your contribution is invaluable, and we are excited to
              work together to uphold the mission of saving lives through the
              gift of blood. Thank you for being a vital part of our blood bank
              family.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
