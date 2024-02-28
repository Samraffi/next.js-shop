import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = ({ topSpaces }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: 64,
        backgroundColor: "#f4fbf3",
        fontFamily: "'__Roboto_42e952', '__Roboto_Fallback_42e952'",
        fontWeight: 400,
        mt: topSpaces ? "20px" : 0,
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item>
        <Typography
          sx={{
            lineHeight: 1.75,
            fontSize: "0.9rem",
            color: "#666",
            margin: 0,
          }}
          variant="subtitle1"
          component="div"
        >
          ©2023
        </Typography>

      </Grid>
      <Grid item>
        <Typography sx={{ lineHeight: 1.75, fontSize: "0.9rem", color: "#1d1d1d" }} variant="h6" component="div">
          &nbsp;Your choise team.&nbsp;
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={{
            lineHeight: 1.75,
            fontSize: "0.9rem",
            color: "#666",
            margin: 0,
          }}
          variant="subtitle1"
          component="div"
        >
          All rights reserved.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
