import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">

      

      <section className="Search-area">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
        <div className="Search">
          <select name="País" id="Pais" value="Selecione...">
              <option></option>
          </select>
          <input type="search" name="Local" id="Local" value="Digite o local que deseja conhecer"/>
          <input type="month" name="Meta" id="Meta" value="mês/ano"/>
          <input type="submit" name="Adicionar" id="Input"/>

        </div>
      </section>
    </div>
  );
}

export default App;
