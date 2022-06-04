/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 15:27:14
 * @LastEditors: your name
 * @Description:
 */

import s from "./WelcomeLayout.module.scss";
import cloud from "../../assets/icons/cloud.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Fourth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={cloud} alt="cloud" />,
      title: () => (
        <h2>
          云备份
          <br />
          再也不怕数据丢失
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/start">完成</RouterLink>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);

Fourth.displayName = "Fourth";
