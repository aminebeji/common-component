import './App.css';
import { ResponsiveLayout } from './lib';
function App() {
  return (
    <div>
      <ResponsiveLayout title={"SasTecSkills"} items={[{ link: "/", title: "home" }]} />
    </div>
  );
}
export default App;