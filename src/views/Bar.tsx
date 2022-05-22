/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 16:44:44
 * @LastEditTime: 2022-05-22 16:45:01
 * @LastEditors: your name
 * @Description:
 */
import { defineComponent } from "vue";
export const Bar = defineComponent({
  setup: (props, context) => {
    return () => <div>Bar</div>;
  },
});
