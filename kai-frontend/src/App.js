import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = () => {
    if(input.trim() === "") return;
    setChat([...chat, { sender: "user", text: input }]);
    setChat(prev => [...prev, { sender: "bot", text: "AI Response Placeholder" }]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Kai Chat</h1>
      <div style={{ minHeight: "200px", border: "1px solid #ccc", padding: "10px" }}>
        {chat.map((msg, i) => (
          <p key={i}><b>{msg.sender}:</b> {msg.text}</p>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
