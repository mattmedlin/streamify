import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-green-400 transition-colors duration-500">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Streamify</h1>
        <DarkModeToggle />
      </div>
      <main>
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
