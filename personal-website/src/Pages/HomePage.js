import { Typography, Grid, Card, CardHeader, CardContent, Button, Avatar } from "@mui/material";
import { useState, useEffect, useReducer } from "react";

const HomePage = () =>{
    //state
    const initState = {
        myVariable: 1,
        myString: ''
    }
    const reducer = (prevState, newState) => {
        return { ...prevState, ...newState};
    }
    const [state, setState] = useReducer(reducer, initState);

    // const [myVariable, setMyVariable] = useState(1)

    //handler functions
    const handleClickedButton = (event) => {
        //once the button is clicked, we can add some changes/functionality here
        setState({myString: 'hello world'})
    }

    const handleClickedSecondButton = (event) => {
        //once the button is clicked, we can add some changes/functionality here
        setState({myVariable: 1337})
    }

    //useeffect
    useEffect(()=>{
        console.log(state)
    }, [state])

    
    return(
        <Grid container justifyContent="center">
            {/** BREAKPOINTS
                -xs, extra-small: 0px
                -sm, small: 600px
                -md, medium: 900px
                -lg, large: 1200px
                -xl, extra-large: 1536px
             */}
            <Grid item xs={12} container justifyContent="center">
                <Typography variant="h3">Welcome to my personal website!</Typography>
            </Grid>
            <Grid container item xs={6} spacing={2}>
                <Grid item xs={6}>
                    <Card elevation={12} sx={{height: 300}}>
                        <CardHeader
                            title="Card 1"
                        />
                        <CardContent>
                            <Button
                                variant="outlined"
                                onClick={handleClickedButton}
                            >
                                Update myString Variable
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card elevation={12} sx={{height: 300}}>
                        <CardHeader
                            title="Card 2"
                        />
                        <CardContent>
                             <Button
                                variant="outlined"
                                onClick={handleClickedSecondButton}
                            >
                                Update myVariable
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Grid container item xs={6}>
                <Card elevation={12} sx={{height:'100%', width:'100%'}}>

                    TESTING
                </Card>
                </Grid>
        </Grid>
    )
}

export default HomePage;