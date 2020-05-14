import * as React from "react";
import RouteView, { IRouteViewProps } from "../routes/RouteView";

interface ILayoutProps extends IRouteViewProps {
}

const Layout = (props: ILayoutProps) => {
  return (
    <div>
      <div>我是Layout</div>
      <RouteView {...props} />
    </div>
  );
};

export default Layout;
