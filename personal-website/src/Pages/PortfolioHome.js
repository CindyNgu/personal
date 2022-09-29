import { Typography, Grid } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";

const PortfolioHome = () => {
    const projectList = [
        {
            title: 'Bubble Sort',
            description: 'Created Bubble Sort Algorithm',
            date: '2020'
        },
        {
            title: 'Mobile App',
            description: 'App for mobile devices',
            date: '2021'
        },
        {
            title: 'Last Project',
            description: 'My last project',
            date: '2022'
        },
    ]

    return(
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Typography variant="h4">Portfolio</Typography>
            </Grid>
            <Grid item xs={10}>
                {projectList.map((item)=>{
                    return(
                        <ProjectCard
                            projectTitle={item.title}
                            projectDescription={item.description}
                            projectDate={item.date}
                        />
                    )
                })}
           </Grid>
        </Grid>
 )
}

export default PortfolioHome;