import axios from 'axios';
import { ISearchBarAppsResult } from '../../interfaces/apps';

import bizuAxios from '../bizuAxios';

const getSearchBarApps = async (platform: string):
  Promise<ISearchBarAppsResult> => bizuAxios.get(`/apps/searchbar?platform=${platform}`)
  .then(({ data }) => data)
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      return [];
    }

    return [];
  });

export default getSearchBarApps;
