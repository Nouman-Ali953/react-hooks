import FetchApi from './Components/Mini_Project/FetchApi';
import ShortCircuitEval from './Components/ShortCircuitEval';
import ToDO from './Components/To-do_List/ToDO';
import UseEffectCleanUP from './Components/UseEffectCleanUP';
import UseEffects from './Components/UseEffects';
import UseRef from './Components/UseRef';
import UseState from './Components/UseState';
import UseStateArray from './Components/UseStateArray';

function App() {
  return (
    <>
      <UseState/>
      <UseStateArray/>
      <ShortCircuitEval/>
      <UseEffects/>
      <UseEffectCleanUP/>
      <FetchApi/>
      <UseRef/>
      <ToDO/>
    </>
  );
}

export default App;
