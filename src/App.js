import React from 'react'
import Welcome from './Routes/Home'
import Week1 from './Routes/Week1'
import Week2 from './Routes/Week2'
import Week3 from './Routes/Week3'
import Week5 from './Routes/Week5'
import Week6 from './Routes/Week6'
import Week7 from './Routes/Week7'
import Week8 from './Routes/Week8'
import Week9 from './Routes/Week9'
import Syllabus from './Routes/Syllabus'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Welcome} />
        <Route path="/week1/:index?" component={Week1} />
        <Route path="/week2/:index?" component={Week2} />
        <Route path="/week3/:index?" component={Week3} />
        <Route path="/week5/:index?" component={Week5} />
        <Route path="/week6/:index?" component={Week6} />
        <Route path="/week7/:index?" component={Week7} />
        <Route path="/week8/:index?" component={Week8} />
        <Route path="/week9/:index?" component={Week9} />
        <Route path="/syllabus" exact component={Syllabus} />
      </Router>
    </div>
  )
}

export default App
