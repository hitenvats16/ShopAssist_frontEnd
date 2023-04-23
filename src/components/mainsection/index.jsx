import React, { useState } from "react";
import BottomContainer from "./components/bottomContainer";
import MessageCell from "./components/messageCell";
import { processQuery } from "../../api/query";
import Recommendation from "./components/recommendations";
import useStorageProvider from "../../hooks/useStorageProvider";

function MainSection({ profile }) {
  const [messages, setMessages] = useState([]);
  const {
    settings: { no_of_recomendations },
  } = useStorageProvider();

  async function processMessage(message) {
    const res = await processQuery(message, no_of_recomendations);
    setMessages([
      ...messages,
      <MessageCell profile={profile} message={message} fromSender />,
      <MessageCell Component={<Recommendation data={res} />} />,
    ]);
  }

  return (
    <div className="bg-gray-700 flex flex-1 relative">
      <div className="flex flex-1 flex-col overflow-y-scroll">{messages}</div>
      <BottomContainer onSubmit={processMessage} />
    </div>
  );
}
export default MainSection;
