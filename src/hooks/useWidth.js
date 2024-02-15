import useMediaQuery from '@mui/material/useMediaQuery';

const useWidth = (theme) => {
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // off documentaciayum tenca grac, uremn karelia
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

export default useWidth;