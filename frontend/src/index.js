import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { App } from './App';
import { Home } from './home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.Fragment>
        <CssBaseline />
        <BrowserRouter forceRefresh={true} >
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/' element={<Home />}>
                        <Route path='/organizations/:organizationId' element={<Home />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
);
