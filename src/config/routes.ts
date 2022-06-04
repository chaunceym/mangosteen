/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:23:31
 * @LastEditTime: 2022-05-22 17:23:32
 * @LastEditors: your name
 * @Description:
 */

import { First } from "./../components/welcome/First";
import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";
import { WelCome } from "../views/Welcome";
import { Second } from "../components/welcome/Second";
import { Third } from "../components/welcome/Third";
import { Fourth } from "../components/welcome/Fourth";

export const routes = [
  { path: "/bar", component: Bar },
  { path: "/", component: Foo },
  {
    path: "/welcome",
    component: WelCome,
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Fourth },
    ],
  },
];
