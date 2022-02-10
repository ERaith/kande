import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Masonry } from "@mui/lab";
import thailand from "../assets/about-photos/thailand.jpg";
import hike from "../assets/about-photos/hike.jpg";
import avalanche from "../assets/about-photos/avalanche.jpg";
import boom from "../assets/about-photos/boom.jpg";
import harry from "../assets/about-photos/harry.jpg";
import teller from "../assets/about-photos/Teller.jpg";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    padding: theme.spacing(1),
    textAlign: "center",
    // border: "1px solid black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const PictureItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const About = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Masonry columns={{ xs: 1, sm: 3 }} spacing={1}>
                <Item>
                    <Typography
                        variant="h6"
                        align="center"
                        className="lg-mg-bottom"
                    >
                        We met one fateful Friday night back in 2009 in
                        Lawrence, KS. We immediately bonded over our interest in
                        the night sky and started showing each other
                        constellations and stars. Then when Erik asked Kelsey
                        out for Chinese for our first date, it was pretty clear
                        that this was going somewhere.
                    </Typography>
                </Item>
                <PictureItem>
                    <img
                        src={`${thailand}?w=162&auto=format`}
                        srcSet={`${thailand}?w=162&auto=format&dpr=2 2x`}
                        alt={thailand}
                        loading="lazy"
                    />
                </PictureItem>
                <Item>
                    <Typography
                        variant="h6"
                        align="center"
                        className="lg-mg-bottom"
                    >
                        After having a long distance relationship all of our
                        college years, we moved to Skokie to start our
                        professional lives and learn how to adult together.
                    </Typography>
                </Item>
                <PictureItem>
                    <img
                        src={`${hike}?w=162&auto=format`}
                        srcSet={`${hike}?w=162&auto=format&dpr=2 2x`}
                        alt={hike}
                        loading="lazy"
                    />
                </PictureItem>
                <PictureItem>
                    <img
                        src={`${avalanche}?w=162&auto=format`}
                        srcSet={`${avalanche}?w=162&auto=format&dpr=2 2x`}
                        alt={avalanche}
                        loading="lazy"
                    />
                </PictureItem>
                <PictureItem>
                    <img
                        src={`${boom}?w=162&auto=format`}
                        srcSet={`${boom}?w=162&auto=format&dpr=2 2x`}
                        alt={boom}
                        loading="lazy"
                    />
                </PictureItem>
                <Item>
                    <Typography
                        variant="h6"
                        align="center"
                        className="lg-mg-bottom"
                    >
                        In 2017, we decided to shake things up and moved to
                        Denver to explore the west. We fell in love with the
                        mountains and have decided to make a home here ever
                        since. In early 2021, we added Maude, our cat, to our
                        little family. A few months later, we decided we better
                        make the family official and decided to invite all our
                        friends and families to celebrate our love together.
                        Cheers!
                    </Typography>
                </Item>
                <Item>
                    <img
                        src={`${harry}?w=162&auto=format`}
                        srcSet={`${harry}?w=162&auto=format&dpr=2 2x`}
                        alt={harry}
                        loading="lazy"
                    />
                </Item>
                <PictureItem>
                    <img
                        src={`${teller}?w=162&auto=format`}
                        srcSet={`${teller}?w=162&auto=format&dpr=2 2x`}
                        alt={teller}
                        loading="lazy"
                    />
                </PictureItem>
            </Masonry>
        </Box>
    );
};

export default About;
