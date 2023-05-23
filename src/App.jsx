import './App.css'
// En esta versión con Vite no necesita el .jsx ni .js
import Tarjeta from './Tarjeta'


function App() {

  const descripcionPerro = "Guau! Guau! Guau!";
  const persona = { name: 'pepe' }
  return (
    <>
      <h1>Hola!</h1>
      <p>{new Date().toLocaleDateString()}</p>
      <Tarjeta titulo="Gato" descripcion="Miau!" />
      <Tarjeta titulo="Perro" descripcion={descripcionPerro} />
    </>
  );
}

export default App
