


import "im-envited/src/window-polyfills"
import React from 'react'
import ReactDOM from 'react-dom/client'
import WithErrorBound from "src/projects/JsxErrorBound";
import { IonApp, } from "@ionic/react"
import App from './App'
import './index.css'









ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <IonApp>
    <App />
    </IonApp>
  </React.StrictMode>,
)












