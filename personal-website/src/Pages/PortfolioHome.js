import { Typography, Grid } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";

const PortfolioHome = () => {
    const projectList = [
        {
            title: 'Graduate Project: Improving tools in the Gaming Industry by developing a model of a QA-oriented Issue Tracker',
            description: '[TBD]',
            date: '2020',
            imagePath: 'https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/09/AI-stock-2000.jpg?fit=1920%2C1280&ssl=1'
        },
        {
            title: 'Bubble Sort Mobile App',
            description: '[TBD]',
            date: '2020',
            imagePath: 'https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/09/AI-stock-2000.jpg?fit=1920%2C1280&ssl=1'
        },
        {
            title: 'Unit & Selenium Testing of an Open-source Project',
            description: '[TBD]',
            date: '2021',
            imagePath: 'https://img.freepik.com/free-vector/cute-astronaut-working-with-computer-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4172.jpg?w=2000'
        },
        {
            title: 'Checkout Automation Proposal for Costco',
            description: '[TBD]',
            date: '2021',
            imagePath: 'https://img.freepik.com/free-vector/cute-astronaut-working-with-computer-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4172.jpg?w=2000'
        },
        {
            title: 'COVID Statistics App',
            description: '[TBD]',
            date: '2020',
            imagePath: 'https://i0.wp.com/cs.utdallas.edu/wp-content/uploads/2022/09/AI-stock-2000.jpg?fit=1920%2C1280&ssl=1'
        },
        {
            title: 'QA Projects',
            description: 'List projects from Sega maybe?',
            date: '2022',
            imagePath: 'https://i.pinimg.com/736x/5e/0a/44/5e0a443a972750adbf6882f159335a8d.jpg'
        },
    ]

    return(
        <Grid container justifyContent="center">
            <Grid item xs={12} container justifyContent="center" sx={{m: 2}}>
                <Typography variant="h3">Portfolio</Typography>
            </Grid>
            <Grid item xs={8} container direction="column" spacing={2}>
                {projectList.map((item)=>{
                    return(
                        <Grid item xs>
                            <ProjectCard key={`${item.title}-${item.description}`}
                                projectTitle={item.title}
                                projectDescription={item.description}
                                projectDate={item.date}
                                imagePath={item.imagePath}
                            />
                        </Grid>
                    )
                })}
           </Grid>
        </Grid>
 )
}

export default PortfolioHome;