import { BellOutlined } from "@ant-design/icons";
 
export default function App() {
  return (
    <>
      <div className="navBar">
        <p className="navBarLinks dashboardPanel">Dashboard</p>
        <p className="navBarLinks portfolioPanel">Portfolio</p>
        <p className="navBarLinks pricesPanel">Prices</p>
        <p className="navBarLinks helpPanel">Help Suport</p>
        <div className="bellBorder">
          <BellOutlined className="bellIcon" />
        </div>
        <p className="navBarLinks accountSettings">Example</p>
      </div>
    </>
  );
}
