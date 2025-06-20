import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        // Use the correct backend port (usually 5000)
        const response = await axios.get(
          "http://localhost:5000/api/groupmembers"
        );
        setArray(response.data.groupMembers);
        setError("");
      } catch (err) {
        console.error("API error:", err);
        setError("Failed to fetch group members");
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  const handleSearch = () => {
    const found = array.some(
      (name) => name.toLowerCase().trim() === searchTerm.toLowerCase().trim()
    );
    setSearchResult(
      found ? "Member is in Group 6" : "Member is not in Group 6"
    );
  };

  return (
    <div>
      <h2>GROUP 6 TECH CRUSH CAPSTONE PROJECT</h2>
      <input
        type="text"
        placeholder="Enter a name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />
      <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
        Search
      </button>

      {loading && <p>Loading group members...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {searchResult && <p>{searchResult}</p>}
      <footer>Class of 2025</footer>
    </div>
  );
}

export default App;
