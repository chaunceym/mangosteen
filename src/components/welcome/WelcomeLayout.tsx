/*
 * @Author: mengxiangyu
 * @Date: 2022-06-04 14:50:14
 * @LastEditTime: 2022-06-04 15:26:24
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
import { FunctionalComponent } from "vue";
import s from "./WelcomeLayout.module.scss";
import pig from "../../assets/icons/pig.svg";

export const WelcomeLayout: FunctionalComponent = (props, context) => {
  const {
    slots: { icon, title, buttons },
  } = context;
  return (
    <div class={s.wrapper}>
      <div class={s.card}>
        {icon?.()}
        {title?.()}
      </div>
      <div class={s.action}>{buttons?.()}</div>
    </div>
  );
};

WelcomeLayout.displayName = "WelcomeLayout";
