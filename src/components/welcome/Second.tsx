/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 15:18:59
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import clock from "../../assets/icons/clock.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={clock} alt="clock" />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不遗漏每一笔账单
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/3">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);

Second.displayName = "Second";
