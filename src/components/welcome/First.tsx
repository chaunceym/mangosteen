/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-06-04 13:33:00
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import s from "./First.module.scss";
import pig from "../../assets/icons/pig.svg";

export const First = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <div class={s.card}>
          <img class={s.pig} src={pig} alt="pig" />
          <h2>
            会挣钱
            <br />
            也要会省钱
          </h2>
        </div>
        <div class={s.action}>
          <RouterLink class={s.fake} to="/welcome/2">
            跳过
          </RouterLink>
          <RouterLink to="/welcome/2">下一页</RouterLink>
          <RouterLink to="/welcome/2">跳过</RouterLink>
        </div>
      </div>
    );
  },
});
