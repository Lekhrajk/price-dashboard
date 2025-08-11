import MainLayout from './components/layouts';
import PricingList from './pages/pricing';

function App() {
  return (
    <div className="App">
      <MainLayout>
         <PricingList />
      </MainLayout>
    </div>
  );
}

export default App;
