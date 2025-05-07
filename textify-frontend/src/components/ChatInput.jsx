import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = ({ emoji }) => {
    setMsg((prevMsg) => prevMsg + emoji);
  };  

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="emoji-container">
        <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
        {showEmojiPicker && (
          <div className="emoji-picker-wrapper">
            <Picker onEmojiClick={handleEmojiClick} />
          </div>
        )}
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );  
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #31473A;
  padding: 0 2rem;
  gap: 1rem;

  .emoji-container {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.8rem;
      color: #ffff00c8;
      cursor: pointer;
    }

    .emoji-picker-wrapper {
      position: absolute;
      bottom: 3rem; /* push above the input */
      left: 0;
      z-index: 10;
      .emoji-picker-react {
        background-color: #080420;
        box-shadow: 0 5px 10pxrgb(243, 134, 134);
        border-color:rgb(16, 235, 63);
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color:rgb(230, 14, 14);
          width: 5px;
          &-thumb {
            background-color:rgb(252, 0, 0);
          }
        }
        .emoji-categories button {
          filter: contrast(0);
        }
        .emoji-search {
          background-color: transparent;
          border-color:rgb(235, 16, 16);
        }
        .emoji-group:before {
          background-color:rgb(40, 12, 199);
        }
      }
    }
  }

  .input-container {
    flex: 1;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #ffffff34;

    input {
      flex: 1;
      background-color: transparent;
      color: white;
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color:rgb(5, 87, 58);
      }
      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;

      svg {
        font-size: 2rem;
        color: #31473A;
      }
    }
  }
`;
