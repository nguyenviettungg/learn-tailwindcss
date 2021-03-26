import Narbar from "./components/Navbar";
import Section from "./components/Section";
import "./App.css";

function App() {
  return (
    <div className="grid md:grid-cols-3">
      <Narbar className="col-span-1" />
      <Section className="col-span-2" />
    </div>
  );
}

export default App;
