import bizuAxios from '../bizuAxios';
import { ISearchBarAppsResult } from '../../interfaces/apps';

const getSearchBarApps = async (platform: string):
  Promise<ISearchBarAppsResult[] | []> => bizuAxios.get(`/apps/searchbar?platform=${platform}`)
  .then(({ data }) => data)
  .catch(() => []);

export default getSearchBarApps;
