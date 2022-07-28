import "./App.css";
import { Header } from "./components/Header";
import { RecordTable } from "./components/RecordTable";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <RecordTable />
    </div>
  );
}

export default App;
