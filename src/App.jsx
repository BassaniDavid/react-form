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

  // usestate per rendere dinamico l array
  const [arrayArticles, setArrayArticles] = useState(articles)

  // usestate per aggiungere nuovo titolo
  const [newArticle, setnewArticle] = useState(' ')

  // funzione per invio nuovo titolo
  const handleSubmit = event => {
    event.preventDefault()
    setArrayArticles([...arrayArticles, newArticle])
  }

  // funzione per inserire nuovo titolo
  const removeArticle = i => {
    const updateArray = arrayArticles.filter((article, index) => {
      return index !== i
    })
    setArrayArticles(updateArray)
  }


  return (
    <>
      <ul>
        {/* map per generare <li> per ogni titolo */}
        {arrayArticles.map((article, i) =>
          <>
            <li key={i}>
              <p>{article}</p>
              <button onClick={() => removeArticle(i)}>cancella</button>
            </li>
          </>
        )}
      </ul >

      {/* form */}
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
