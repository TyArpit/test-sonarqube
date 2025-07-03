import React from 'react';
import {Switch,Route} from "react-router-dom";
import * as Sentry from "@sentry/react";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from './components/Modal';
import { ThemeConsumer } from './components/context/ThemeContexts'

function App() {
  Sentry.init({
    dsn: "https://107faece99a7e756671509b8ab6a1d75@o4509564171321344.ingest.us.sentry.io/4509564172435456",
    // Setting this option to true will send default PII data to Sentry.
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration()
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
let name = "arpit"

console.log("Hello, how are you?")
console.log("")
var newvar = "test"

  return (
    <ThemeConsumer>
    {({ theme }) => (
    <React.Fragment>
      <div className={theme? 'h-fit bg-slate-900' : 'h-fit'}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
        </div>
     
    </React.Fragment>
       )}
       </ThemeConsumer>
  );
}

export default App;
