import classes from './NavBar.module.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const NavBar = (props) => {


    return (
        <nav className={classes.nav}>
            <ul>

                <li className={classes.logo}><Link to='/' className={classes.linkHome}>home</Link></li>
                <li><Link to='/subjects/1er' className={classes.link}>1er</Link></li>
                <li><Link to='/subjects/2eme' className={classes.link}>2eme</Link></li>
                <li><Link to='/subjects/3eme' className={classes.link}>3eme</Link></li>
                <li><Link to='/apropos' className={classes.link}>a propos</Link></li>
                <li ><Link to='/feedback' className={classes.feedBack}>feedBack</Link></li>
                <li>...</li>

            </ul>
        </nav>

    )
}

const mapStateToProps = state => {
    return {
        quote: state.quotes[state.quoteIndex]
    }
}

const mapDispachToProps = dispatch => {
    return {
        visit: () => dispatch({ type: 'VISIT' })
    }
}


export default connect(mapStateToProps, mapDispachToProps)(NavBar)
