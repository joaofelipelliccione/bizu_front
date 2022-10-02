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
        background: '#60C597',
        width: '35%',
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
          label="busque um aplicação (ex: nubank)"
        />
      )}
    />
  );
}
export default SearchBar;
