/*
 * @Author: mengxiangyu
 * @Date: 2022-06-04 14:50:14
 * @LastEditTime: 2022-06-04 14:51:50
 * @LastEditors: your name
 * @Description:
 */

/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 14:34:19
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import pig from "../../assets/icons/pig.svg";

export const WelcomeLayout = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          {slots.icon?.()}
          {slots.title?.()}
        </div>
        <div class={s.action}>
          {slots.buttons?.()}
        </div>
      </div>
    );
  },
});
