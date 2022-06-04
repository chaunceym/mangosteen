/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:04
 * @LastEditTime: 2022-06-04 11:15:59
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from "./Welcome.module.scss";
import logo from "../assets/icons/logo.svg";

console.log(logo);
export const WelCome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} alt="logo" />
          <h1>山竹记账</h1>
        </header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
