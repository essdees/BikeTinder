import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, Text, View, Button } from 'react-native';

import { useTailwind } from 'tailwind-rn';
import { NavigationConstants } from '../constants/ApplicationEnums';
import { NavigationType } from '../navigation/Navigation';

const LandingPage = () => {
    const tailwind = useTailwind();
    const navigation = useNavigation<NavigationType>();

    return (
        <SafeAreaView style={tailwind('h-full')}>
            <View style={tailwind('pt-12 items-center')}>
                <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                    <Text style={tailwind('text-blue-800 font-semibold')}>
                        Hello Tailwind
                    </Text>
                </View>
                <Button
                    title="Go to Chat Screen"
                    onPress={() =>
                        navigation.navigate(NavigationConstants.CHAT_SCREEN)
                    }
                />
            </View>
        </SafeAreaView>
    );
};

export default LandingPage;
