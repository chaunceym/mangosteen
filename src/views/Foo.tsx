/*
 * @Author: mengxiangyu
 * @Date: 2022-05-22 16:36:10
 * @LastEditTime: 2022-05-22 16:36:11
 * @LastEditors: your name
 * @Description:
 */
import { defineComponent } from "vue";
export const Foo = defineComponent({
  setup: (props, context) => {
    return () => <div>Foo</div>;
  },
});
