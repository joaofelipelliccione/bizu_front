/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { useRouter } from 'next/router';
import { Autocomplete, Box, TextField } from '@mui/material';
// import Link from 'next/link';
import getSearchBarApps from '../../services/GET/getSearchBarApps';
import { ISearchBarAppsResult } from '../../interfaces/apps';
// import styles from '../../styles/components/navbar.module.css';

function SearchBar() {
  const router = useRouter();
  const [searchBarApps, setSearchBarApps] = React.useState<ISearchBarAppsResult[]>([]);

  const onAutocompleteChange = (_e: React.SyntheticEvent, value: ISearchBarAppsResult | null) => {
    if (value !== null) {
      router.push(`/${value?.platform.toLowerCase()}/${value?.id}`);
    }
  };

  React.useEffect(() => {
    getSearchBarApps('all').then((resp) => setSearchBarApps(resp));
  }, []);

  return (
    <Autocomplete
      sx={{
        width: {
          xs: '55%', sm: '50%', md: '45%', lg: '45%',
        },
      }}
      options={searchBarApps}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => onAutocompleteChange(event, value)}
      autoHighlight
      size="small"
      renderOption={(props, option) => (
        <Box
          {...props}
          component="li"
          sx={{
            '& > img': { borderRadius: '7px', mr: 2, flexShrink: 0 },
            '&:hover': { backgroundColor: '#A7B3B7 !important' },
            borderRadius: '5px',
          }}
        >
          <img
            loading="eager"
            width="30"
            src={option.logo}
            alt={`Logo da aplicação ${option.name}`}
          />
          {option.name}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="nome da aplicação..."
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
