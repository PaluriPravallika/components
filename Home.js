import React from "react";
import { Button } from "react-bootstrap";
import { useUser } from "../context/UserAuth";
import { useNavigate } from "react-router";

const Home = () => {
  const { 
    logOut, 
    user } = useUser();
    console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        Hello Welcome <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" 
        onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;
