import './css/index.scss';

import MainPage from './components/mainpage';

import React from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';

const root = ReactDOM.createRoot(document.getElementById("app-root") as HTMLElement);

root.render(<MainPage />);
