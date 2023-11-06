import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import LandingPage from './src/pages/LandingPage';

const App = () => {
    return (
        <TailwindProvider utilities={utilities}>
            <LandingPage />
        </TailwindProvider>
    );
};

export default App;
