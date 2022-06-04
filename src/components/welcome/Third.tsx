/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 15:27:10
 * @LastEditors: your name
 * @Description:
 */

import s from "./WelcomeLayout.module.scss";
import chart from "../../assets/icons/chart.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={chart} alt="chart" />,
      title: () => (
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink class={s.fake} to="/start">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/4">下一页</RouterLink>
          <RouterLink to="/start">跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);

Third.displayName = "Third";
