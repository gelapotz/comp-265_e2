import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function NotesHome() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20 }}>Home Screen</Text>

            <Link href="/(tabs)/notes/details?itemId=123" style={{ marginTop: 20 }}>
                Go to Details
            </Link>
        </View>
    );
}
