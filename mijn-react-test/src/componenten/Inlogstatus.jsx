import { useState } from "react";

function InlogStatus() {
  const [ingelogd, setIngelogd] = useState(false);
  const [naam, setNaam] = useState("");

  const handleLogin = () => {
    if (naam.trim() !== "") {
      setIngelogd(true);
    }
  };

  const handleLogout = () => {
    setIngelogd(false);
    setNaam(""); 
  };

  return (
    <div style={{ padding: "20px", background: "#e0f7fa", borderRadius: "8px" }}>
      {ingelogd ? (
        <>
          <h2>Welkom terug, {naam} 👋</h2>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff5252",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Uitloggen
          </button>
        </>
      ) : (
        <>
          <h2>Log in om verder te gaan</h2>
          <input
            type="text"
            placeholder="Typ je naam..."
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            style={{
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              width: "200px"
            }}
          />
          <br />
          <button
            onClick={handleLogin}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Inloggen
          </button>
        </>
      )}
    </div>
  );
}

export default InlogStatus;
