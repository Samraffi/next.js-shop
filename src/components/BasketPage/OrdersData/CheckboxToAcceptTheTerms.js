"use client";

import Link from "next/link";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import TermsSnackbar from "./TermsSnackbar";

const CheckboxToAcceptTheTerms = ({ checked, setChecked, openSnackbar, setOpenSnackbar }) => {
  const handleChecked = () => {
    if (!checked && openSnackbar) {
      setOpenSnackbar(false);
    }

    setChecked(!checked);
  };

  return (
    <Box mt={2}>
      <Grid sx={{ flexGrow: 1, flexWrap: "nowrap" }} item container>
        <Grid item>
          <Checkbox
            name="convention"
            checked={checked}
            onChange={() => handleChecked()}
            required
          />
        </Grid>
        <Grid item>
          <Typography>
            I agree with the&nbsp;
            <a href="https://www.termsfeed.com/live/11ea7f0c-71af-4430-94cf-8f5f3ec6472b" target="_blank">
              rules
            </a>&nbsp;
            {/* <Link href="https://www.termsfeed.com/live/11ea7f0c-71af-4430-94cf-8f5f3ec6472b">
                rules
              </Link>&nbsp; */}
            for using the trading platform and returning
          </Typography>
        </Grid>
      </Grid>
      <TermsSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </Box>
  );
}

export default CheckboxToAcceptTheTerms;
