import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";
import flowers from "../assets/flowers.jpg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const PictureItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const styles = {
    media: {
        position:"absolute",
        height: '100%',
        opacity: 0.345
    },
    card: {
        position: "relative",
    },
    overlay: {
        // position: "absolute",
        float:'right',
        top: "2%",
        left: "20px",
        color: "black",
        padding: "5%",
        //    backgroundColor: 'white'
    },
};

export const EventLocation = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Card style={styles.card}>
                            <CardMedia image={flowers} />
                            <CardMedia
                                style={styles.media}
                                component="img"
                                height="140"
                                image={flowers}
                                alt="green iguana"
                            />
                            <div style={styles.overlay}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    className="lg-mg-bottom"
                                >
                                    <b>
                                    Together with our parents, we look forward
                                    to celebrating our new beginning with all of
                                    you.
                                    </b>
                                    <br/>
                                    <br/>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    className="lg-mg-bottom"
                                    >
                                    We invite you to join us at <br/>
                                    the Denver
                                    Botanic Gardens-Chatfield,<br/> 
                                    August 13, 2022<br/>
                                    for an evening of dinner, drinks, dancing,
                                    games, and love.
                                    <br/>
                                    <br/>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    className="lg-mg-bottom"
                                    >
                                    <b>Attire is dressy casual. </b><br/>
                                    Remember this is going to be a predominantly outdoor,
                                    garden event in August.  Weather can change quickly from a day time high in the 90s to overnight
                                     tempertures in the 50s. So plan your attire accordingly 
                                    (heels probably won't be your friend and that 3 piece suit, 
                                    though dashing, could cause heatstroke). 
                                    <br/>
                                    <br/>
                                    

                                </Typography>
                                <Typography
                                    variant="h6"
                                    align="center"
                                    className="lg-mg-bottom"
                                    style={styles.footer}
                                >

                                    Please see below for more information on the location and more specific timeline (coming soon).

                                </Typography>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <h3>
                                Denver Botanic Garden Chatfield Farms
                                <br />
                                Green Farm Barn
                            </h3>

                            <p>
                                8500 West Deer Creek Canyon Road
                                <br />
                                Littleton CO 80128
                            </p>
                            <a href="https://www.botanicgardens.org/chatfield-farms">
                                Botanic Garden's Website
                            </a>
                            <div class="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12305.800353707273!2d-105.10514261598024!3d39.549457798169534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b7c30eab3ea75%3A0x8db8f95b60bbb606!2sDenver%20Botanic%20Gardens%20Chatfield%20Farms!5e0!3m2!1sen!2sus!4v1638135423420!5m2!1sen!2sus"
                                    // width="600"
                                    // height="450"
                                    allowfullscreen=""
                                    loading="lazy"
                                />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Item>
                            <b>Wedding Timeline:</b>
                            <br />
                            <b>4:30 PM </b>Guests Welcome
                            <br />
                            <b>5:00 PM </b>Ceremony Start Time
                            <br />
                            <b>5:30PM  </b>Cocktail hour
                            <br />
                            <b>7:00PM  </b>Dinner
                            <br />
                            <b>8:05PM  </b>Dancing
                            <br />
                            <b>11:00PM  </b>Event Ends
                            <br />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default EventLocation;
