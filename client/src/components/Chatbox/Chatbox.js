import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chatbox.css'; // Assuming you still have the styles from the previous steps

const Chatbox = ({ stepId }) => {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Ask me clarifying questions or provide your code/prompt response for feedback..." }
    ]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Watcher for stepId changes. This will clear messages whenever stepId changes.
    useEffect(() => {
        setMessages([{ role: 'assistant', content: "Hello, I am Quest, your quest guide! Ask me clarifying questions or provide your code/prompt response for feedback..." }]);
    }, [stepId]);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(`https://learning-loom.onrender.com/api/chatbot/response/${stepId}`, { message: userInput });

            if (response.data.success) {
                setMessages(prevMessages => [...prevMessages, 
                    { role: 'user', content: userInput }, 
                    { role: 'assistant', content: response.data.message }
                ]);
                setUserInput('');
            } else {
                // Handle error messages from the server
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error communicating with server:', error);
            alert('Error communicating with server');
        }
        setIsLoading(false);
    };

    return (
        <div className="chatbox">
            <div className="messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.role}`}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="input-area">
                <input 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    disabled={isLoading}
                />
                <button onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send'}
                </button>
            </div>
        </div>
    );
};

export default Chatbox;
