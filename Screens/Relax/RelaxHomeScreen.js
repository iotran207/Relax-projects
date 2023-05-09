import React, { useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

export default function RelaxHomeScreen() {
  const [messages, setMessages] = useState([
    {
      _id: 20071115,
      text: 'hi,mình là relax bot, mình có thể giúp gì cho bạn?',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Chat Bot',
        avatar: require('../Login/Logo.png'),
      },
    },
  ]);

  function onSend(newMessages = []) {
    const isUser1 = newMessages[0].user._id === 1;
    if (isUser1) {
      const loadingMessage = {
        _id: 11152007,
        text: 'Đang gõ . . .',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat Bot',
          avatar: require('../Login/Logo.png'),
        },
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [loadingMessage, newMessages[0]]));
    axios.post('http://18.141.160.222/Assistant', {
      content: newMessages[0].text,
    })
    .then(function (response) {
      content = response.data.message;
      console.log(content);
      const autoReply = {
        _id: Math.round(Math.random() * 1000000),
        text: content,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chat Bot',
          avatar: require('../Login/Logo.png'),
        },
      };
      setMessages(previousMessages => {
        const filteredMessages = previousMessages.filter(message => message._id !== loadingMessage._id);
        return GiftedChat.append(filteredMessages, [autoReply]);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
    } else {
      setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    }
  }
  

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{
          _id: 1,
          name: 'User',
        }}
      />
    </View>
  );
}
