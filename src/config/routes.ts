/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:23:31
 * @LastEditTime: 2022-05-22 17:23:32
 * @LastEditors: your name
 * @Description:
 */

import { Foo } from "../views/Foo";
import { Bar } from "../views/Bar";

export const routes = [
  { path: "/bar", component: Bar },
  { path: "/", component: Foo },
];
