import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import LandingPage from './src/screens/LandingPage';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
    return (
        <NavigationContainer>
            <TailwindProvider utilities={utilities}>
                <StackNavigator />
            </TailwindProvider>
        </NavigationContainer>
    );
};

export default App;
