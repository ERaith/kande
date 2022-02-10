import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import weddingrings from "../assets/wedding-rings.jpg";
import cashapp from "../assets/cashapp.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { lightBlue, purple } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
    "&:hover": {
        backgroundColor: purple[700],
    },
    width: "100%",
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
}));

export const Registry = () => {
    return (
        <Box
            sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "row",
            }}
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
                    <Grid item xs={12} md={12} lg={12}>
                <Card sx={{ display: "flex", maxWidth: "300px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent
                            sx={{
                                flex: "1 0 auto",
                                textAlign: "center",
                            }}
                        >
                            <Typography component="div" variant="h7//#endregion">
                                We attempted to find local shops as best as we could to include in our registry. 
                            </Typography>
                        </CardContent>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                            }}
                        ></Box>
                        <ColorButton
                            target="_blank"
                            href="https://www.myregistry.com/wedding-registry/kelsey-brucks-and-erik-raith-lakewood-co/3104742"
                            size="small"
                            sx={{
                                color: (theme) => theme.palette.primary.dark,
                            }}
                        >
                            MyRegistry.com
                        </ColorButton>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={weddingrings}
                        alt="Registry"
                    />
                </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    
                <Card sx={{ display: "flex", maxWidth: "600px" }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent
                            sx={{
                                flex: "1 0 auto",
                                textAlign: "center",
                            }}
                            >
                            <Typography component="div" variant="h7">
                                We are still working on the house. If you prefer to help with the raw materials for our bathroom remodal. Consider donating some cash!
                            </Typography>
                        </CardContent>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                pl: 1,
                                pb: 1,
                            }}
                            ></Box>
                        <ColorButton
                            target="_blank"
                            href="https://cash.app/$KandE813"
                            size="small"
                            sx={{
                                color: (theme) => theme.palette.primary.dark,
                            }}
                            >
                            $KandE813
                        </ColorButton>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={cashapp}
                        alt="Registry"
                        />
                </Card>
                        </Grid>
                        </Grid>
            </ThemeProvider>
        </Box>
    );
};

export default Registry;
