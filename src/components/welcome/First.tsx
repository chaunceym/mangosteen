/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 17:37:17
 * @LastEditTime: 2022-05-22 17:37:18
 * @LastEditors: your name
 * @Description:
 */

import { defineComponent } from "vue";
export const First = defineComponent({
  setup: (props, context) => {
    return () => <div>First</div>;
  },
});
