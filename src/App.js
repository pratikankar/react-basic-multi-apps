import './App.css';
import Accordian from './components/accordian';
import RandomBGColor from './components/random-bg-color';
import Ratings from './components/ratings';
import ImageSlider from './components/image-slider';
import DataLoading from './components/data-loading';
import DynamicMenu from './components/dynamic-menu';
import QRGenerator from './components/qr-generator';
import SwitchTheme from './components/switch-theme';
import ScrollProgress from './components/scroll-progress';
import CustomTabs from './components/tabs/cust-tabs';

function App() {
  return (
    <div className="App">
      {/* Accordian Component*/}
      {/* <Accordian /> */}

      {/* Random BG Color Component */}
      {/* <RandomBGColor /> */}

      {/* Ratings Component */}
      {/* <Ratings /> */}
      
      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'}/> */}

      {/* Data Loading Component */}
      {/* <DataLoading /> */}

      {/* Dynamic Menu Component */}
      {/* <DynamicMenu /> */}

      {/* QR Generator Component */}
      {/* <QRGenerator/> */}

      {/* Switch Theme Component */}
      {/* <SwitchTheme /> */}

      {/* Scroll Progress Component */}
      {/* <ScrollProgress url={'https://dummyjson.com/products?limit=100'} /> */}

      {/* Custom Tabs Component */}
      <CustomTabs />

    </div>
  );
}

export default App;
