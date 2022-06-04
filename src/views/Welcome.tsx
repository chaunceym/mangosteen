/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:04
 * @LastEditTime: 2022-06-04 10:39:40
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import s from './Welcome.module.scss';

export const WelCome = defineComponent({
  setup: (props, context) => {
    return () => (
      <div class={s.wrapper}>
        <header>logo</header>
        <main>
          <RouterView />
        </main>
      </div>
    );
  },
});
