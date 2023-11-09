import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
    LandingPage: undefined;
    ChatScreen: undefined;
};

export type NavigationType = StackNavigationProp<RootStackParamList>;
