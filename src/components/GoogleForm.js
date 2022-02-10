import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useWindowSize from "../utils/useWindowSize";

export const GoogleForm = (props) => {
    const { width } = useWindowSize();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid   
            container
            direction="column"
            justifyContent="center"
            sx={{p:0}}
            alignItems="center">
        {width<800 &&
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd4rQR9CEfmz9UFotz9rMgsUR2yW49srg5HfWWG8JXdcFa_2g/viewform?embedded=true"
                width="100%"
                height="1625"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
            >
            </iframe>
        }
        {width>=800 &&
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSd4rQR9CEfmz9UFotz9rMgsUR2yW49srg5HfWWG8JXdcFa_2g/viewform?embedded=true"
                width="100%"
                height="1625"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
            >
            </iframe>
        }


      </Grid>
    </Box>
    );
};

export default GoogleForm;
