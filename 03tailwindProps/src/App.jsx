import Card from './components/Card.jsx'
import DefProps from './components/DefProps.jsx'
import logo from './assets/logo.png';
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png"
import logo4 from "./assets/logo4.png"
import logo5 from "./assets/logo5.png"
import ResponsiveCard from './components/ResponsiveCard.jsx';
function App() {

  return (
    <div className="overflow-x-hidden min-h-screen w-screen bg-black grid grid-cols-2 gap-20 place-items-center">
      <Card logo={logo} title="Data Doko" description="The complete IT solutions" />
      <Card logo={logo1} title="SpaceX" description="A Rocket building company."/>
      <Card logo={logo2} title="Tesla" description="A Futuristic Car company" />
      <Card logo={logo3} title="Tailwind CSS" description="A CSS Framework"/>
      <Card logo={logo4} title="BMW" description="Das Auto"/>
      <Card logo={logo5} title="Apple" description="Leading Tech Company"/> 
      <ResponsiveCard />
      {/* <Card logo={logo4} title="BMW" description="Das Auto"/>
      <Card logo={logo5} title="Apple" description="Leading Tech Company"/> 
      <Card logo={logo4} title="BMW" description="Das Auto"/>
      <Card logo={logo5} title="Apple" description="Leading Tech Company"/>  */}
      {/* <Card username="Elon" cardNum="2"/>
      <Card />

      <DefProps first="Anish" second="25" />
      <DefProps first="Elon" second="45"/>
      <DefProps /> */}
    </div>
  )
}

export default App
