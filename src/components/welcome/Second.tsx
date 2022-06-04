/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-05-22 17:41:11
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
export const Second = defineComponent({
  setup: (props, context) => {
    return () => <div>Second</div>;
  },
});
