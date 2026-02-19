import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Profile Screen</Text>

            <Link href="/(tabs)/profile/settings" style={{ marginTop: 20 }}>
                Go to Settings
            </Link>
        </View>
    );
}
