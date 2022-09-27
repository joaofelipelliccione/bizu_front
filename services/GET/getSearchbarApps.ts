import axios from 'axios';
import { ISearchbarAppsResult } from '../../interfaces/apps';
import bizuAxios from '../bizuAxios';

const getSearchbarApps = async (platform: string):
  Promise<ISearchbarAppsResult[]> => bizuAxios.get(`/apps/searchbar?platform=${platform}`)
  .then(({ data }) => data)
  .catch((error) => {
    if (axios.isAxiosError(error)) {
      return [];
    }

    return [];
  });

export default getSearchbarApps;
