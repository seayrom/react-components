import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import { MySelf } from "./components/MySelf";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Paragraph></Paragraph>
      <Input />
      <MySelf name="Prince" age={20} gender="male" />
      <MySelf name="kojo" age={25} gender="male" />
      <MySelf name="ama" age={21} gender="male" />
      <MySelf name="Prince" age={20} gender="male" />
      <MySelf name="Prince" age={20} gender="male" />
      <MySelf name="Prince" age={20} gender="male" />
      <MySelf name="Prince" age={20} gender="male" />
      <Counter />
    </div>
  );
}

export default App;
