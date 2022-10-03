/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
// import Link from 'next/link';
import getSearchBarApps from '../../services/GET/getSearchBarApps';
import { ISearchBarAppsResult } from '../../interfaces/apps';
// import styles from '../../styles/components/navbar.module.css';

function SearchBar() {
  const [searchBarApps, setSearchBarApps] = React.useState<ISearchBarAppsResult[]>([]);

  React.useEffect(() => {
    getSearchBarApps('all').then((data) => setSearchBarApps(data as unknown as ISearchBarAppsResult[]));
  }, []);

  return (
    <Autocomplete
      sx={{
        width: { md: '25%', lg: '32%' },
      }}
      options={searchBarApps}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => console.log(value?.id)}
      autoHighlight
      size="small"
      renderOption={(props, option) => (
        <Box
          {...props}
          component="li"
          sx={{
            '& > img': { borderRadius: '7px', mr: 2, flexShrink: 0 },
            '&:hover': { backgroundColor: '#C6CCCE !important' },
          }}
        >
          <img
            loading="lazy"
            width="20"
            src={option.logo}
            alt={option.name}
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="busque uma aplicação..."
          InputLabelProps={{ style: { color: '#FFFFFF' } }}
          sx={{
            '& label.Mui-focused': { color: '#FFFFFF' },
            '& .MuiInput-underline:after': { borderBottomColor: '#FFFFFF' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#FFFFFF', backgroundColor: '#21DF7F', opacity: '0.5' },
              '&:hover fieldset': { borderColor: '#FFFFFF', backgroundColor: '#21DF7F', opacity: '0.3' },
              '&.Mui-focused fieldset': { borderColor: '#FFFFFF' },
            },
          }}
        />
      )}
    />
  );
}
export default SearchBar;
