/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 15:09:20
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import pig from "../../assets/icons/pig.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img src={pig} alt="pig" />,
          title: () => (
            <h2>
              回挣钱
              <br />
              还要会省钱
            </h2>
          ),
          buttons: () => (
            <>
              <RouterLink class={s.fake} to="/start">
                跳过
              </RouterLink>
              <RouterLink to="/welcome/2">下一页</RouterLink>
              <RouterLink to="/start">跳过</RouterLink>
            </>
          ),
        }}
      </WelcomeLayout>
    );
  },
});
