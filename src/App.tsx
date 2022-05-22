import { defineComponent, ref } from "vue";
import { RouterView } from "vue-router";

export const App = defineComponent({
  setup() {
    return () => (
      <>
        <header>
          导航
          <ul>
            <li>
              <routerLink to="/">Foo</routerLink>
            </li>
            <li>
              <routerLink to="/bar">Bar</routerLink>
            </li>
          </ul>
        </header>
        <div>
          <routerView></routerView>
        </div>
        <footer>页脚</footer>
      </>
    );
  },
});
