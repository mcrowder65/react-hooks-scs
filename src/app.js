import React from "react";
import "babel-polyfill";
import { Router as BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  MuiThemeProvider as ThemeProvider,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";
import AgendaAndGoals from "./agenda-and-goals";
import NetworkStatusHoc from "./hoc/network-status";
import AboutMe from "./about-me";
import Todo from "./todo";
import { theme } from "./theme";
import HocsInAppian from "./hoc/hocs-in-appian";
import ApiCallHoc from "./hoc/api-call";
import FunctionComposition from "./hoc/function-composition";
import BringItAllTogetherHOC from "./hoc/bring-it-together";
import NetworkStatusRenderProps from "./render-props/network-status";
import RenderPropsApiCall from "./render-props/api-call";
import BringingItAllTogetherRenderProps from "./render-props/bringing-it-all-together";
import UseStateExample from "./basic-hook/use-state";
import UseEffectExample from "./basic-hook/use-effect-example";
import UseEffectExampleTimesTwo from "./basic-hook/use-effect-times-two";
import Destructuring from "./basic-hook/destructuring";
import NetworkStatusHooks from "./hooks/network-status";
import ApiCallHooks from "./hooks/api-call";
import BringingItAllTogetherHooks from "./hooks/bringing-it-all-together";
import Conclusion from "./conclusion";
import Children from "./render-props/children";
import AdditionalResources from "./more-links";
import Outline from "./outline/outline";
const browserHistory = createBrowserHistory();
const routes = [
  { path: "/about-me", name: "About me", component: AboutMe },
  {
    path: "/agenda-and-goals",
    name: "Agenda and Goals",
    component: AgendaAndGoals,
  },
  {
    path: "/hocs",
    name: "Higher Order Components",
    component: Todo,
    subcomponents: [
      {
        path: "/example-hoc",
        name: "HOCs in Appian!",
        component: HocsInAppian,
      },
      {
        path: "/network-status",
        name: "Network Status",
        component: NetworkStatusHoc,
      },
      {
        path: "/api-call",
        name: "Api Call",
        component: ApiCallHoc,
      },
      {
        path: "/function-composition",
        name: "Function Composition",
        component: FunctionComposition,
      },
      {
        path: "/bringing-it-all-together",
        name: "Bringing it all together",
        component: BringItAllTogetherHOC,
      },
    ],
  },
  {
    path: "/render-props",
    name: "Render Props",
    component: Todo,
    subcomponents: [
      {
        path: "/children",
        name: "Children 🚸",
        component: Children,
      },
      {
        path: "/network-status",
        name: "Network Status",
        component: NetworkStatusRenderProps,
      },
      {
        path: "/api-call",
        name: "Api Call",
        component: RenderPropsApiCall,
      },
      {
        path: "/bringing-it-all-together",
        name: "Bringing it all together",
        component: BringingItAllTogetherRenderProps,
      },
    ],
  },
  {
    path: "/basic-hook",
    name: "Basic Hook",
    component: Todo,
    subcomponents: [
      {
        path: "/destructuring",
        name: "Destructuring",
        component: Destructuring,
      },
      {
        path: "/use-state",
        name: "useState",
        component: UseStateExample,
      },
      {
        path: "/use-effect",
        name: "useEffect",
        component: UseEffectExample,
      },
      {
        path: "/times-two-use-effect",
        name: "count even number occurrences",
        component: UseEffectExampleTimesTwo,
      },
    ],
  },
  {
    path: "/rewrite-in-hooks",
    name: "Writing it all in hooks",
    component: Todo,
    subcomponents: [
      {
        path: "/network-status",
        name: "Network Status",
        component: NetworkStatusHooks,
      },
      {
        path: "/api-call",
        name: "Api Call",
        component: ApiCallHooks,
      },
      {
        path: "/bringing-it-all-together",
        name: "Bringing it all together",
        component: BringingItAllTogetherHooks,
      },
    ],
  },
  {
    path: "/conclusion",
    name: "Conclusion",
    component: Conclusion,
  },
  {
    path: "/additional-readings",
    name: "Additional Links",
    component: AdditionalResources,
  },
];
const muiTheme = createMuiTheme(theme);
function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <ThemeProvider theme={muiTheme}>
        <Outline routes={routes} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
