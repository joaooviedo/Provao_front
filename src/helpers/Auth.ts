import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { LocalStorageKeys } from "types/LocalStorageKeys";

export const Auth = {
  isAuth: (): boolean => {
    const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN);
    const user = LocalStorageHelper.get(LocalStorageKeys.USER);

    return token !== null && user !== null;
  },
};