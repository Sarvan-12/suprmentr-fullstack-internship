import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h2>Welcome to Task Manager</h2>
      <p>A simple app to manage your daily tasks.</p>
      <button onClick={() => navigate("/tasks")}>Go to Tasks →</button>
    </div>
  );
}

export default Home;