import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function DetailsScreen() {
    const { itemId } = useLocalSearchParams();

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Details Screen</Text>
            <Text style={{ marginTop: 10 }}>Item ID: {itemId}</Text>
        </View>
    );
}
