import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { color } from '../utils/colors'

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity}>
                <View style={styles.searchIconText}>
                    <AntDesign
                        name="search1"
                        size={24}
                        color="white"
                        style={styles.searchIcon}
                    />
                    <Text style={styles.text}>Rechercher sur eBay</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.micCamera}>
                <Ionicons
                    name="mic-outline"
                    size={28}
                    color="white"
                    style={styles.mic}
                />
                <SimpleLineIcons
                    name="camera"
                    size={24}
                    color="white"
                    style={styles.camera}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: color.secondary,
        alignItems: 'center',
        borderRadius: 50,
    },
    searchIconText: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    micCamera: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    mic: {
        marginRight: 12,
    },
    camera: {},
    text: {
        color: color.text,
        letterSpacing: 0.6,
        fontSize: 16,
        marginLeft: 15,
    },
})

export default SearchBar
