import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PortfolioHome from './Pages/PortfolioHome';
import AboutMePage from './Pages/AboutMePage';
import NavBar from './UI/NavBar';
import { Container, Grid } from "@mui/material";

const Routes = () => {
    const routes = (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/portfolio' component={PortfolioHome}/>
            <Route exact path='/about' component={AboutMePage}/>
        </Switch>
    )

    return(
        <Grid container>
            <NavBar/>
            <Container>
                {routes}
            </Container>
        </Grid>
    )
}

export default Routes