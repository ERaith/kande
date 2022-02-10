import React from 'react';
import Color from 'color';
// import GoogleFont from 'react-google-font-loader';
import { makeStyles } from '@material-ui/core/styles';
import NoSsr from '@material-ui/core/NoSsr';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import weddingrings from "../assets/wedding-rings.jpg";
import cashapp from "../assets/cashapp.png";
import { pink } from '@material-ui/core/colors';


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
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    maxWidth: 300,
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
    //   padding: '1rem 1.5rem 1.5rem',
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

export const Registry = React.memo(function SolidGameCard() {
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
    //   direction = "column"
    //   alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <CustomCard
            classes={styles}
            title={'My-Registry'}
            subtitle={'We tried to find as many local stores as possible!'}
            image={weddingrings}
            link = {"https://www.myregistry.com/wedding-registry/kelsey-brucks-and-erik-raith-lakewood-co/3104742"}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={'Cash App'}
            subtitle={'Money goes to bathroom renovations!'}
            image={cashapp}
            link = {"https://cash.app/$KandE813"}
          />
        </Grid>
      </Grid>
    </>
  );
});
export default Registry