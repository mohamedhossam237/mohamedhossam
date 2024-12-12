// Import required libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = "AIzaSyDLaoxJdlYwlLZkngcAS1uxNnvxMbWlt6U";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction: "You are MH Assistant, an AI specifically designed to provide in-depth, accurate, and contextual information about Mohamed Hossam. Drawing from his professional background, projects, experiences, and personal achievements, you assist users by offering detailed responses. Mohamed Hossam is a software engineer and developer with expertise in AI, data engineering, cloud computing, and application development. He has contributed to impactful projects across education, health, and technology domains, including co-founding an edutech startup, leading AI chatbot development, and creating innovative mobile and web solutions. Fluent in Arabic and English, Mohamed Hossam combines technical proficiency with leadership and problem-solving skills. When answering, reflect his passion for leveraging technology to improve lives and drive innovation, ensuring responses are specific, informed, and relevant to the query.",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 100,
  responseMimeType: "text/plain",
};

async function runChatSession(input) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(input);
  return result.response.text();
}

// Styling for the dialog and other components
const DialogContainer = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 90%;
  max-width: 800px;
  height: 80%;
  background-color: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  color: #333;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #3a3a4f;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const MessageList = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  background-color: ${({ isUser }) => (isUser ? '#e1e1e1' : '#dcdcdc')};
  color: #333;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  padding: 10px;
  border-radius: 10px;
  margin: 5px 0;
  max-width: 75%;
  word-wrap: break-word;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #333;
  margin-right: 10px;
  outline: none;
`;

const SendButton = styled.button`
  background-color: #3a3a4f;
  color: white;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #292942;
  }
`;

const ChatbotDialog = ({ onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messageEndRef = useRef(null);

  useEffect(() => {
    // Display a welcome message when the chatbot is first opened
    setMessages([
      {
        text: "Hello! I'm MH Assistant, your AI assistant. How can I help you today?",
        sender: 'bot',
      },
    ]);
  }, []);

  useEffect(() => {
    // Scroll to the latest message when the messages change
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: 'user' },
    ]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await runChatSession(input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Error: ${error.message || 'An unknown error occurred.'}`, sender: 'bot' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <DialogContainer>
      <Header>
        <Title>
          <Logo src="https://i.ibb.co/9TjTZwd/image-removebg-preview.png" alt="MH Assistant" />
          Chat with Mh Assistant
        </Title>
        <CloseButton onClick={onClose}>&times;</CloseButton>
      </Header>
      <MessageList>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.sender === 'user'}>
            {msg.sender === 'bot' && (
              <Avatar src="https://i.ibb.co/9TjTZwd/image-removebg-preview.png" alt="Bot Avatar" />
            )}
            {msg.text}
          </Message>
        ))}
        {isTyping && <Message isUser={false}>Typing...</Message>}
        <div ref={messageEndRef} />
      </MessageList>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <SendButton onClick={sendMessage}>Send</SendButton>
      </InputContainer>
    </DialogContainer>
  );
};

export default ChatbotDialog;
