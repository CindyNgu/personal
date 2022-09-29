import { Card, CardHeader, CardContent, CardActionArea, Typography, Button } from "@mui/material";
import { useEffect } from "react";

const ProjectCard = (props) => {
    const { projectTitle, projectDescription, projectDate } = props;
    console.log(props)
    return(
        <>
            <Card>
                <CardHeader
                    title={`${projectTitle} - ${projectDate}`}
                />
                <CardContent>
                    <Typography>{projectDescription}</Typography>
                </CardContent>
                <CardActionArea>
                    <Button>Button</Button>
                </CardActionArea>
            </Card>
        </>
    )
}

export default ProjectCard;