import { useNavigate } from "react-router-dom";
import { authClient } from "../lib/auth-client";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authClient.signOut();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <span className="text-lg font-semibold text-gray-900">Agentic Helpdesk</span>
      <div className="flex items-center gap-4">
        {session && (
          <span className="text-sm text-gray-600">{session.user.name}</span>
        )}
        <button
          onClick={handleSignOut}
          className="text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
}
