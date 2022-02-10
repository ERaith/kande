import * as React from "react";
import Color from 'color';
import Grid from "@mui/material/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import south_valley_park from "../assets/south_valley.jpg";
import deer_creek from "../assets/deer_creek.jpg";
import us_285 from "../assets/us-285.jpg"
import south_platte from "../assets/south_platte.jpg"
import denver_zoo from "../assets/denver_zoo.jpg"

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
  },
  card: ({ color }) => ({
    minWidth: 256,
    maxWidth: 400,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle, link }) => {
//   const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea 
    className={classes.actionArea}
    target = "_blank"
    href = {link}
    >
      <Card className={classes.card}>
        <CardMedia  image={image} component="img" />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={'h5'}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

export const Activities = () => {
    const gridStyles = useGridStyles();
    const styles = useStyles({ color: '#203f52' });
    const styles2 = useStyles({ color: '#00C244' });
    const styles3 = useStyles({ color: '#ff9900' });
    const styles4 = useStyles({ color: '#34241e' });

    return (
        <>
        <Grid 
        classes={gridStyles} 
        container 
        spacing={6} 
        wrap={'wrap'}
        justifyContent="center"
        style={{ minHeight: '100vh' }}
        >
          <Grid item>
            <CustomCard
              classes={styles}
              title={'South Valley Park'}
              subtitle={`If you want to try your hand at some hiking during your visit but want to stay close to Denver, 
              we recommend a couple of local open spaces.  We love going to South Valley Park for an easy hike with beautiful 
              views of the sandstone red rocks and the hogbacks (https://www.jeffco.us/1431/South-Valley-Park). `
            }
              image={south_valley_park}
              link = {"https://www.jeffco.us/1431/South-Valley-Park"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Deer Creek Canyon'}
              subtitle={`If you are looking for something a little more adventurous and hilly, there is also Deer Creek Canyon Park just down the road 
              (https://www.jeffco.us/1208/Deer-Creek-Canyon-Park). It boasts some pretty cool views of the metro, if you can make it to the top. `}
              image={deer_creek}
              link = {"https://www.jeffco.us/1208/Deer-Creek-Canyon-Park"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={'Mountain Driving'}
              subtitle={`If you want to head into the wilderness, the mountains are calling!  
              We really enjoy heading South on US-285 to explore around Indian Hills, Conifer, and Evergreen.  
              But really, pick a direction and explore; you can’t go wrong.`}
              image={us_285}
              link = {""}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={'South Platte River'}
              subtitle={`If you want to stay off the main highways and take in some of what the Front Range has to offer on some windy dirt roads, here is a link to the google maps directions for a drive we have really enjoyed doing.  It is about 2 hours and for the majority of it, you travel along the South Platte River `}
              image={south_platte}
              link = {"https://goo.gl/maps/gbqsPdPTAM3R6aJW7"}
            />
          </Grid>          
          <Grid item>
            <CustomCard
              classes={styles3}
              title={'Family Fun!'}
              subtitle={`Denver also has much to offer in the way of family friendly fun! Check out some of the local museums, zoos, or parks. `}
              image={denver_zoo}
              link = {"https://www.denver.org/things-to-do/"}
            />
          </Grid>
        </Grid>
      </>
    );
};

export default Activities;
