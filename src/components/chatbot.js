import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { analyze } from "../utils";


export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      message: "Hi, May i have your name?",
    },
  ]);
  const [text, setText] = useState("");
  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...list, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: `Hi, ${text}`,
        },
        {
          message: "How can i help you?",
        },
      ];
    }
    setMessages(list);
    setText("");
    setTimeout(() => {
      document.querySelector("#copyright").scrollIntoView();
    }, 1);
  };
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwXYbiRoQpGbtLL_10o9BIsnVp8_Qw1P5nLMc0-RxCp0xXsL36vfHxFb19aLhft4eXnU4&usqp=CAU"
          alt="logo"
          height={200}
          width={200}
        />
        <h2 className="text-success">Chatbot</h2>
      </div>
      <div className="chat-message">
        {messages.length > 0 &&
          messages.map((data) => <ChatMessage {...data} />)}
        <div className="d-flex mt-2">
          <input
            type="text"
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="primary" className="ms-3  bg-warning" onClick={onSend}>
            Send
          </button>
        </div>
        <div id="copyright" className="mt-3">
          Copyrights reserved
        </div>
      </div>
    </div>
  );
}
