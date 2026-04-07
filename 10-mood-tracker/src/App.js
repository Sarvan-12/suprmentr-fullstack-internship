import { useState } from "react";
import "./App.css";

const moods = [
  { label: "Happy", emoji: "😄", color: "#f9c74f", message: "You're feeling great! Keep that energy going." },
  { label: "Sad", emoji: "😢", color: "#4cc9f0", message: "It's okay to feel sad. Take it easy today." },
  { label: "Angry", emoji: "😠", color: "#e63946", message: "Take a deep breath. Things will calm down." },
  { label: "Anxious", emoji: "😰", color: "#a8dadc", message: "One step at a time. You've got this." },
  { label: "Bored", emoji: "😑", color: "#adb5bd", message: "Maybe try something new today?" },
  { label: "Excited", emoji: "🤩", color: "#f77f00", message: "Love the energy! Go make something happen." },
];

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  return (
    <div
      className="app"
      style={{
        background: selectedMood
          ? `linear-gradient(135deg, #1a1a2e, ${selectedMood.color}55)`
          : "#1a1a2e",
      }}
    >
      <h1>How are you feeling today?</h1>

      <div className="mood-grid">
        {moods.map((mood) => (
          <button
            key={mood.label}
            className={`mood-btn ${selectedMood?.label === mood.label ? "active" : ""}`}
            style={{
              borderColor: selectedMood?.label === mood.label ? mood.color : "transparent",
              boxShadow: selectedMood?.label === mood.label ? `0 0 16px ${mood.color}88` : "none",
            }}
            onClick={() => handleMoodSelect(mood)}
          >
            <span className="emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>

      {selectedMood && (
        <div
          className="mood-result"
          style={{ borderColor: selectedMood.color, color: selectedMood.color }}
        >
          <p className="mood-title">You're feeling {selectedMood.label}</p>
          <p className="mood-message">{selectedMood.message}</p>
        </div>
      )}

      {!selectedMood && (
        <p className="prompt">Select a mood above to get started</p>
      )}
    </div>
  );
}

export default App;