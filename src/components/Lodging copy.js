import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { lightBlue,purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { borderRadius, palette } from "@mui/system";
import homewood from "../assets/homewood.webp";
import holiday from "../assets/holiday.jpeg";
import patio from "../assets/patio-area.webp";
import chatfield from "../assets/Chatfield01.jpeg";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const theme = createTheme({
    palette: {
        primary: {
            main: "#5E3B98",
            dark: "#281B3B",
            contrastText: "white",
            text: "#EA3CE3",
        },
        text: {
            main: "#5E3B98",
            dark: "#281B3B",
            contrastText: lightBlue,
        },
        secondary: lightBlue,
    },
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    width:"100%",
    borderTopLeftRadius:0,
    borderTopRightRadius:0
  }));

export const Lodging = () => {
    return (
        <Box 
        sx={{ flexGrow: 1 }}
        >
            <ThemeProvider theme={theme}>
                <Grid 
                container 
                spacing={2}
                justify="center"
                direction="column"
                alignItems="center"
                justifyContent="center"

                >
                    <Grid item xs={12} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                bgcolor: (theme) => theme.palette.primary.main,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={homewood}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Homewood Suites
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Pet Friendly, Includes Pool, Grill Patio,
                                    Basketball hoop. Super close to I 470. ~
                                    5miles from venue
                                </Typography>
                            </CardContent>
                            <CardActionArea
                                target="_blank"
                                href="https://www.hilton.com/en/hotels/denlihw-homewood-suites-denver-littleton/?SEO_id=GMB-HW-DENLIHW&y_source=1_MjA4NDk3NC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"

                                >
                                <ColorButton
                                    variant="contained"
                                    disableElevation
                                    // size=""
                                    target="_blank"
                                    href="https://www.hilton.com/en/hotels/denlihw-homewood-suites-denver-littleton/?SEO_id=GMB-HW-DENLIHW&y_source=1_MjA4NDk3NC03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.dark,
                                    }}
                                >
                                    Visit their Website
                                </ColorButton>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                bgcolor: (theme) => theme.palette.primary.main,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={patio}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Hampton Inn & Suites Denver Littleton
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Not Pet Friendly, Includes Pool. ~
                                    5miles from venue
                                </Typography>
                            </CardContent>
                            <CardActionArea
                                target="_blank"
                                href="https://www.hilton.com/en/hotels/denlthx-hampton-suites-denver-littleton/?SEO_id=GMB-HX-DENLTHX&y_source=1_MjA4NDk3MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
                            >
                                <ColorButton
                                    size="auto"
                                    target="_blank"
                                    href="https://www.hilton.com/en/hotels/denlthx-hampton-suites-denver-littleton/?SEO_id=GMB-HX-DENLTHX&y_source=1_MjA4NDk3MS03MTUtbG9jYXRpb24uZ29vZ2xlX3dlYnNpdGVfb3ZlcnJpZGU%3D"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.dark,
                                    }}
                                >
                                    Visit their Website
                                </ColorButton>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                bgcolor: (theme) => theme.palette.primary.main,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={holiday}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Holiday Inn Express & suites Denver
                                    SW-Littleton
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Pet Friendly, Onsite pet walking, Includes Pool. Super close to I 470. ~
                                    5miles from venue
                                </Typography>
                            </CardContent>
                            <CardActionArea
                                target="_blank"
                                href="https://www.ihg.com/holidayinnexpress/hotels/us/en/littleton/denlt/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-DENLT"

                            >
                                <ColorButton
                                    size="auto"
                                    target="_blank"
                                    href="https://www.ihg.com/holidayinnexpress/hotels/us/en/littleton/denlt/hoteldetail?cm_mmc=GoogleMaps-_-EX-_-US-_-DENLT"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.dark,
                                    }}
                                >
                                    Visit their Website
                                </ColorButton>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Card
                            sx={{
                                maxWidth: 345,
                                bgcolor: (theme) => theme.palette.primary.main,
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={chatfield}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    Chatfield State Park
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.contrastText,
                                    }}
                                >
                                    If you’re looking for a place to park an RV or pitch a tent, there is a state park basically across the street from the Botanic Gardens. You can enjoy boating or fishing on the Chatfield Reservoir, or hiking and biking the 26 miles of trails!
                                </Typography>
                            </CardContent>
                            <CardActionArea
                                target="_blank"
                                href="https://cpw.state.co.us/placestogo/parks/Chatfield"

                            >
                                <ColorButton
                                    size="auto"
                                    target="_blank"
                                    href="https://cpw.state.co.us/placestogo/parks/Chatfield"
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.primary.dark,
                                    }}
                                >
                                    Visit their Website
                                </ColorButton>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    );
};

export default Lodging;
