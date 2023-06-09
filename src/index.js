import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Main from './Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LatinAmerica } from './pages/LatinAmerica/LatinAmerica';
import { Challenges } from './pages/Challenges/Challenges';
import { hydrate, render } from "react-dom";
import { Analytics } from '@vercel/analytics/react';

const rootElement = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/que-es-america-latina-unida',
        element: <LatinAmerica />,
    },
    {
        path: '/america-latina-desafios-y-progresos-en-el-financiamiento',
        element: <Challenges />,
    },
]);

const App = (
    <React.StrictMode>
        <RouterProvider router={router} />
        <Analytics />
    </React.StrictMode>
);


if (rootElement.hasChildNodes()) {
    hydrate(App, rootElement);
} else {
    render(App, rootElement);
}
 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
