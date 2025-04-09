import { useState } from 'react'

// lista di articoli
const articles = [
  "I segreti della produttività mattutina",
  "Perché camminare ogni giorno può cambiarti la vita",
  "Come organizzare una scrivania minimalista",
  "Le 5 app che ti aiutano davvero a risparmiare",
  "La guida completa al digital detox",
  "Cosa mangiare prima e dopo l’allenamento",
  "Viaggiare con pochi bagagli: missione possibile",
  "Le migliori serie TV da non perdere quest’anno",
  "Come migliorare la qualità del sonno",
  "Il potere della gratitudine nella vita quotidiana"
];



function App() {

  const [arrayArticles, setArrayArticles] = useState(articles)

  const [newArticle, setnewArticle] = useState(' ')

  const handleSubmit = event => {
    event.preventDefault()
    console.log('il nuovo articolo inviato è:' + newArticle)
    const updateArray = [...arrayArticles, newArticle]
    setArrayArticles(updateArray)
  }

  return (
    <>
      <ul>
        {arrayArticles.map((article, index) => <li key={index}>{article}</li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newArticle}
          onChange={e => setnewArticle(e.target.value)} />
        <button>invia</button>
      </form>
    </>
  )
}

export default App
