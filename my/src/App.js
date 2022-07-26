import logo from './logo.svg';
import './App.css';
import A1 from './components/a1';
import Counter from './components/counter';
import Clock from './components/clock';
import Text from './components/txtcompo';
import Darkmode from './components/darkmode';
import C1 from './components/c1';

function App() {
  return (
    <>
    <A1 name="Raj"></A1>
    <Counter></Counter>

<div className="container m-5">
<Clock></Clock>
<Text></Text>
<Darkmode/>
<C1/>
</div>
    </>
  );
}

export default App;
