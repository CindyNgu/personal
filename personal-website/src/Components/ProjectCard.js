import { Card, CardHeader, CardContent, CardActionArea, Typography, Button, CardMedia } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const ProjectCard = (props) => {
    const { projectTitle, projectDescription, projectDate, imagePath } = props;
    const [expanded, setExpanded] = useState(false);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return(
        <>
            <Card variant="outlined">
                <CardHeader
                    title={projectTitle}
                    subheader={projectDate}
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={imagePath}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography>{projectDescription}</Typography>
                </CardContent>
                <CardActionArea>
                    {/* <Button variant="outlined">Button</Button> */}
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                        <ExpandMoreIcon />
                    </ExpandMore>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>Description:</Typography>
                        <Typography paragraph> 
                            This is the first paragraph describing this project.
                        </Typography>
                        <Typography paragraph>
                            This is the second paragraph describing this project.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </CardActionArea>
            </Card>
        </>
    )
}

export default ProjectCard;