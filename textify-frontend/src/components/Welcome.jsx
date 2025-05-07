import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = () => {
      try {
        const data = localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY);
        if (data) {
          const parsed = JSON.parse(data);
          setUserName(parsed.username || "");
        }
      } catch (err) {
        console.error("Error parsing user data from localStorage:", err);
        setUserName("");
      }
    };

    fetchUserName();
  }, []);

  return (
    <Container>
      <img src={Robot} alt="robot" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: blue;
  }
`;
