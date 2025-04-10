import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // ⬅️ Hier wordt de "state" bijgehouden

  return (
    <div style={{ padding: "20px", background: "#f0f0f0", borderRadius: "8px" }}>
      <h2>Je hebt {count} keer geklikt</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "6px",
          backgroundColor: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
      >
        Klik mij
      </button>
    </div>
  );
}

export default Counter;
