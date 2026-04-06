import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState<string>("Checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("Error connecting to server"));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold text-gray-900">Agentic Helpdesk</h1>
      <p className="text-lg text-gray-600">
        Server status:{" "}
        <span
          className={
            status === "ok" ? "text-green-600 font-semibold" : "text-red-600 font-semibold"
          }
        >
          {status}
        </span>
      </p>
    </div>
  );
}

export default App;
