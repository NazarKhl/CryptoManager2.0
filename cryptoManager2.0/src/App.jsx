import { Spin } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 100);

  return (
    <>
      {loading && (
        <div className="loadingPanel">
          <Spin size="large" />
        </div>
      )}
      <div className="navBar">
        <a className="navBarLinks dashboardPanel" href="#main">
          Dashboard
        </a>
        <a className="navBarLinks pricesPanel" href="#prices">
          Prices
        </a>
        <a className="navBarLinks helpPanel" href="#help">
          Help Suport
        </a>
        <div className="bellBorder">
          <BellOutlined className="bellIcon" />
        </div>
        <p className="navBarLinks accountSettings">Portfolio</p>
      </div>
      <div id="container">
        <div id="main"></div>
        <div id="prices"></div>
        <div id="help"></div>
      </div>
    </>
  );
}
