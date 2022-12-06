import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNotFound from "./pages/404";
import AdminPanel from "./pages/adminpanel";
import CenterSubComponent from "./sub/mainpagecentersubcomp";

const MainPage = () => {

    return(
        <main>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CenterSubComponent />} />
                    <Route path="/adminpanel" element={<AdminPanel />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default MainPage;
