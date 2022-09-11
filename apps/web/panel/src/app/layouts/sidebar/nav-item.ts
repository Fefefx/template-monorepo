import { Params } from '@angular/router';
import { UserType } from '@enums/user-type';

export interface INavItem {
  icon: string;
  name: string;
  url: string;
  iconImg: string;
  iconImgHover: string;
  queryParams?: Params;
  roles?: UserType[];

  children?: {
    name: string;
    url: string;
    queryParams?: Params;
  }[];
}
