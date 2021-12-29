import classes from './App.module.css'
import { Route, Routes, useParams } from 'react-router-dom'
import YearCard from './components/YearCard'
import Home from './components/Home.js'
import NavBar from './components/NavBar'
import Apropos from './components/Apropos'
import { connect } from 'react-redux'

function App(props) {


  return (
    <div className={classes.App}>

      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/subjects/:id' element={<YearCard />} />
        <Route path='/apropos' element={<Apropos />} />
      </Routes>

      <div className={classes.quote}>
        <blockquote>{props.quote}</blockquote>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // quote: state.quotes[state.quoteIndex]
    quote: state.quotes[Math.floor(Math.random() * state.quotes.length)]
  }
}

export default connect(mapStateToProps)(App);
