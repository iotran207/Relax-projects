import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const RoomChat = ({ roomId }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Get the messages for the current room
    fetch(`/api/rooms/${roomId}/messages`)
      .then(response => response.json())
      .then(messages => setMessages(messages));
  }, [roomId]);

  const onSend = (text) => {
    // Send the message to the server
    fetch(`/api/rooms/${roomId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ text }),
    })
      .then(response => response.json())
      .then(message => {
        setMessages([...messages, message]);
        setIsTyping(false);
      });
  };

  const onTyping = () => {
    setIsTyping(true);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      onTyping={onTyping}
      isTyping={isTyping}
    />
  );
};

export default RoomChat;