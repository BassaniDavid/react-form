import { useState } from 'react'

// lista di articoli
const articles = [
  {
    title: "I segreti della produttività mattutina",
    description: "Scopri come iniziare la giornata con energia e mantenere alta la concentrazione fino a sera."
  },
  {
    title: "Perché camminare ogni giorno può cambiarti la vita",
    description: "Una semplice abitudine quotidiana che può migliorare la salute mentale e fisica."
  },
  {
    title: "Come organizzare una scrivania minimalista",
    description: "Meno oggetti, più chiarezza: la guida definitiva per un ambiente di lavoro ordinato ed efficace."
  },
  {
    title: "Le 5 app che ti aiutano davvero a risparmiare",
    description: "Dai budget automatici agli sconti nascosti: ecco le app che fanno la differenza."
  },
  {
    title: "La guida completa al digital detox",
    description: "Staccare la spina per ritrovare equilibrio e focus: ecco come farlo senza stress."
  },
  {
    title: "Cosa mangiare prima e dopo l’allenamento",
    description: "Alimentazione e performance: i cibi migliori per preparare e recuperare un workout."
  },
  {
    title: "Viaggiare con pochi bagagli: missione possibile",
    description: "Tecniche e consigli per viaggiare leggeri senza rinunciare a nulla di essenziale."
  },
  {
    title: "Le migliori serie TV da non perdere quest’anno",
    description: "Un mix di thriller, commedie e drammi che stanno conquistando il pubblico."
  },
  {
    title: "Come migliorare la qualità del sonno",
    description: "Routine, ambiente e alimentazione: tutto ciò che serve per dormire davvero bene."
  },
  {
    title: "Il potere della gratitudine nella vita quotidiana",
    descrizione: "Un semplice esercizio mentale che può cambiare il tuo modo di vedere il mondo."
  }
];


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        {articles.map(article => <li>{article.title}</li>)}
      </ul>
    </>
  )
}

export default App
