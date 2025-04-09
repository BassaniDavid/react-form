import { useState } from 'react'

// lista di articoli
const articles = [
  {
    id: 1,
    title: "I segreti della produttività mattutina",
    description: "Scopri come iniziare la giornata con energia e mantenere alta la concentrazione fino a sera."
  },
  {
    id: 2,
    title: "Come organizzare una scrivania minimalista",
    description: "Meno oggetti, più chiarezza: la guida definitiva per un ambiente di lavoro ordinato ed efficace."
  },
  {
    id: 3,
    title: "Le 5 app che ti aiutano davvero a risparmiare",
    description: "Dai budget automatici agli sconti nascosti: ecco le app che fanno la differenza."
  },
  {
    id: 4,
    title: "La guida completa al digital detox",
    description: "Staccare la spina per ritrovare equilibrio e focus: ecco come farlo senza stress."
  },
  {
    id: 5,
    title: "Cosa mangiare prima e dopo l’allenamento",
    description: "Alimentazione e performance: i cibi migliori per preparare e recuperare un workout."
  },
  {
    id: 6,
    title: "Viaggiare con pochi bagagli: missione possibile",
    description: "Tecniche e consigli per viaggiare leggeri senza rinunciare a nulla di essenziale."
  },
  {
    id: 7,
    title: "Le migliori serie TV da non perdere quest’anno",
    description: "Un mix di thriller, commedie e drammi che stanno conquistando il pubblico."
  },
  {
    id: 8,
    title: "Come migliorare la qualità del sonno",
    description: "Routine, ambiente e alimentazione: tutto ciò che serve per dormire davvero bene."
  },
  {
    id: 9,
    title: "Il potere della gratitudine nella vita quotidiana",
    descrizione: "Un semplice esercizio mentale che può cambiare il tuo modo di vedere il mondo."
  },
  {
    id: 10,
    title: "Perché camminare ogni giorno può cambiarti la vita",
    description: "Una semplice abitudine quotidiana che può migliorare la salute mentale e fisica."
  },
];


function App() {

  const [newArticle, setnewArticle] = useState('aggiungi il nuovo articolo')

  const handleSubmit = event => {
    event.preventDefault()
    console.log('il nuovo articolo inviato è:' + newArticle)
  }

  return (
    <>
      <ul>
        {articles.map(article => <li key={article.id}>{article.title}</li>)}
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
