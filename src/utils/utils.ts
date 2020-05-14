import Loadable from "react-loadable";
export default function asyncComponent(comp) {
  return Loadable({
    loader: comp,
    loading: (props) => {
      if (props.error) {
        window.location.replace(window.location.href);
      } else {
        return "加载中...";
      }
    },
  });
}
