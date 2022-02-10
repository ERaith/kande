import * as React from "react";
import Color from 'color';
import Grid from "@mui/material/Grid";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import homewood from "../assets/homewood.webp";
import holiday from "../assets/holiday.jpeg";
import patio from "../assets/patio-area.webp";
import chatfield from "../assets/Chatfield01.jpeg";

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

export const Lodging = () => {
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
              title={'Homewood Suites'}
              subtitle={
                  `Pet Friendly, Includes Pool, Grill Patio,
                  Basketball hoop. Super close to I 470. ~
                  5miles from venue`
              }
              image={homewood}
              link = {"https://www.hilton.com/en/hotels/denlihw-homewood-suites-denver-littleton/?SEO_id=GMB-HW-DENLIHW&y_source=1_MjA4NDk3NC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Hampton Inn & Suites Denver Littleton'}
              subtitle={` Not Pet Friendly, Includes Pool. ~
              5miles from venue`}
              image={patio}
              link = {"https://www.hilton.com/en/hotels/denlthx-hampton-suites-denver-littleton/?SEO_id=GMB-HX-DENLTHX&y_source=1_MjA4NDk3MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles}
              title={'Holiday Inn Express & suites Denver SW-Littleton'}
              subtitle={`
              Pet Friendly, Onsite pet walking, Includes Pool. Super close to I 470. ~
              5miles from venue
              `}
              image={holiday}
              link = {"https://www.ihg.com/holidayinnexpress/hotels/us/en/littleton/denlt/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-DENLT"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              classes={styles4}
              title={'Chatfield State Park'}
              subtitle={`
              If you’re looking for a place to park an RV or pitch a tent, there is a state park basically across the street from the Botanic Gardens. You can enjoy boating or fishing on the Chatfield Reservoir, or hiking and biking the 26 miles of trails!
              `}
              image={chatfield}
              link = {"https://cpw.state.co.us/placestogo/parks/Chatfield"}
            />
          </Grid>          
        </Grid>
      </>
    );
};

export default Lodging;
