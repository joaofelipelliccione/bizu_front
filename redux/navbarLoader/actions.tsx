export const NAVBAR_LOADER = 'NAVBAR_LOADER';
export const navbarLoaderAC = (status: boolean) => ({
  type: NAVBAR_LOADER,
  isActive: status,
});
