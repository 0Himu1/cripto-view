import { Layout } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
  CryptoCurrencies,
  CryptoDetails,
  Exchanges,
  HomePage,
  Navbar,
  News,
} from "./Components/index";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:coinid" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
