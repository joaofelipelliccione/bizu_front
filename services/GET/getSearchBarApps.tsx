import bizuAxiosPlain from '../axiosInstances/bizuAxiosPlain';
import { ISearchBarAppsResult } from '../../interfaces/apps';

const getSearchBarApps = async (platform: string):
  Promise<ISearchBarAppsResult[] | []> => bizuAxiosPlain.get(`/apps/searchbar?platform=${platform}`)
  .then(({ data }) => data)
  .catch(() => []);

export default getSearchBarApps;
