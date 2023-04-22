import React, { useState } from "react";
import BottomContainer from "./components/bottomContainer";
import MessageCell from "./components/messageCell";
import { processQuery } from "../../api/query";

function MainSection() {
    const [messages,setMessages] = useState([])

    async function processMessage(message){
        const res = await processQuery(message)
        console.log(res)
        setMessages([...messages, <MessageCell message={message} fromSender/>, <MessageCell message={'demo reply'}/>])
    }

  return (
    <div className="bg-gray-700 flex flex-1 relative">
      <div className="flex flex-1 flex-col overflow-y-scroll">
        {messages}
      </div>
      <BottomContainer onSubmit = {processMessage}/>
    </div>
  );
}





export default MainSection;
