setResponses([...responses, { question: input, answer: reply }]);
    setInput('');
  };

  if (!verified) {
    return (
      <div className="container">
        <h2>Enter Password to Access Jay Shivendra AI</h2>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handlePassword}>Unlock</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Jay Shivendra Thakur AI 🤖</h1>
      <textarea
        rows="4"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Apna sawal yahaan likhiye..."
      />
      <button onClick={handleAsk}>Poochho</button>
      <div className="chatbox">
        {responses.map((r, index) => (
          <div key={index} className="chat">
            <p><strong>Q:</strong> {r.question}</p>
            <p><strong>A:</strong> {r.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
