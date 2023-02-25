import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChampionDetail from "./Components/detailComponents/ChampionDetail";
import ChampionGrid from "./Components/detailComponents/ChampionGrid";
import SkinDetail from "./Components/detailComponents/SkinDetail";
import SkinGrid from "./Components/detailComponents/SkinGrid";
import Footer from "./Components/Footer";

import Header from "./Components/Header";
import Home from "./Components/Home";
import F0FError from "./Components/mainComponents/F0FError";
import Menu from "./Components/mainComponents/Menu";
import MyPage from "./Components/myPage/MyPage";

import champList from "./data/champion";
import useSkins from "./data/useSkins";

function App() {
    const [champData] = useState(champList);
    const skinData = useSkins();
    console.log("APP:", skinData);
    return (
        <div
            className="App"
            style={{
                background: `url(
                  ${process.env.PUBLIC_URL}/images/bg.jpg
              ) no-repeat center 140px`,
                backgroundSize: "100% auto",
            }}
        >
            <Header />
            <Menu />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path={"/champions"}
                    element={<ChampionGrid />}
                />
                <Route
                    path="/skins"
                    element={<SkinGrid />}
                />
                <Route
                    path="/champions/:id"
                    element={<ChampionDetail data={champData} />}
                />
                <Route
                    path="/skins/:id"
                    element={
                        <SkinDetail
                            data={skinData}
                            sub={champData}
                        />
                    }
                />
                <Route
                    path="*"
                    element={<F0FError />}
                />
                <Route
                    path="/mypage"
                    element={<MyPage />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
