import { View, Text, StyleSheet, Pressable } from 'react-native'
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { color } from '../utils/colors'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Pressable
                style={({ pressed }) => [
                    styles.searchIconText,
                    pressed && styles.activePressable,
                ]}
            >
                <AntDesign
                    name="search1"
                    size={24}
                    color="white"
                    style={styles.searchIcon}
                />
                <Text style={styles.text}>Rechercher sur eBay</Text>
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    styles.mic,
                    pressed && styles.activePressable,
                ]}
            >
                <Ionicons name="mic-outline" size={28} color="white" />
            </Pressable>
            <Pressable
                style={({ pressed }) => [
                    styles.camera,
                    pressed && styles.activePressable,
                ]}
            >
                <SimpleLineIcons name="camera" size={24} color="white" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    searchIconText: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: color.secondary,
        paddingHorizontal: 12,
        // paddingVertical: 10,
        height: 48,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        alignItems: 'center',
    },
    micCamera: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mic: {
        backgroundColor: color.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
    },
    camera: {
        backgroundColor: color.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    text: {
        color: color.text,
        letterSpacing: 0.6,
        fontSize: 16,
        marginLeft: 15,
        paddingTop: 0,
    },
    activePressable: {
        opacity: 0.8,
        backgroundColor: color.grey,
    },
})

export default SearchBar
