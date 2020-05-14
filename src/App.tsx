import React, { Suspense } from "react";
import RouteConfig from "./routes/router.config";
import RouteView from "./routes/RouteView";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <RouteView children={RouteConfig}></RouteView>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
