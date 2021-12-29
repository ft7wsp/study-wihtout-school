import { connect } from 'react-redux'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'




function Main(props) {
    return (
        <div>

            <header className={classes.header}>

                <h1>"ES-REPO"</h1>
                <p>ES-REPO est une plateforme créée par des étudiants d'esprit qui vise à collecter tous les cours/TDs de manière simple et facile.</p>
                <Link to='/apropos' className={classes.btn1}>a propos</Link>

            </header>

            <div className={classes.container}>
                <div className={classes.year}><Link className={classes.btn} to='/subjects/1er'>    1er   </Link></div>
                <div className={classes.year}><Link className={classes.btn} to='/subjects/2eme'>    2eme   </Link></div>
                <div className={classes.year}><Link className={classes.btn} to='/subjects/3eme'>    3eme   </Link></div>

            </div>

        </div>
    )
}


const mapDispachToProps = dispatch => {
    return {
        visit: () => dispatch({ type: 'VISIT' })
    }
}


export default connect(null, mapDispachToProps)(Main)