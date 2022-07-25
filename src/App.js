import "./App.css";
import { ResponsiveLayout } from "./lib";
function App() {
  return (
    <div>
      <ResponsiveLayout
        title={"Responsive Layout"}
        items={[
          { link: "/", title: "home" },
          { link: "/components", title: "Components" },
          { link: "#about-us", title: "About Us" },
        ]}
        sideBar={true}
      >
        <h1>Hello World !</h1>
      </ResponsiveLayout>
    </div>
  );
}
export default App;
