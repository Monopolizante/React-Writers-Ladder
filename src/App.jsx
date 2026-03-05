import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  let arraySinonimos = []
  const [sinonimo, setSinonimo] = useState([])
  const [palavra, setPalavra] = useState("")
  const pegarSinonimos = async () => {
    try{
      const resposta =  await axios.get(`https://freedictionaryapi.com/api/v1/entries/en/${palavra}`)
      arraySinonimos = resposta.data.entries[0].synonyms
      setSinonimo(arraySinonimos)
      console.log(arraySinonimos)
    } catch (error){
      console.log(error)
    }}
  return (
    <>
      <div>
      <input placeholder="Any word..." onChange={(event) => {
        setPalavra(event.target.value)
      }}></input>
      {sinonimo.map((sinonimos, index) => 
        <p key={index}>{sinonimos}</p>
      )}
      <button onClick={pegarSinonimos}>Show Synonyms</button>
      </div>
    </>
  )
}

export default App
