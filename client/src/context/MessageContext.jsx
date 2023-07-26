import { createContext, useContext, useState } from "react";
import { getMessages } from "../api/message";

export const MessageContext = createContext();

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessage must be used within an MessageProvider");
  }
  return context;
};

export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const verMessages = async () => {
    try {
      const res = await getMessages();
      const mensajesMasNuevos = res.data.messages.reverse();
      setMessages(mensajesMasNuevos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MessageContext.Provider
      value={{
        verMessages,
        messages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
