import { View, Image, TouchableOpacity, Text } from "react-native";
import batLogo from '../../../assets/batlogo.png';
import styles from "./Style";

interface HomeProp {
    visible: boolean,
    handleClickActive: () => void
}

export default function BatHome(props: HomeProp) {
    return (
        <View style={[styles.container, { display: props.visible ? 'flex' : 'none' }]}>
            <Image
                source={batLogo}
                style={{
                    resizeMode: 'contain',
                    height: 80,
                }}
            />

            <TouchableOpacity style={styles.button} onPress={props.handleClickActive}>
                <Text style={styles.text}>Ativar Bat Sinal</Text>
            </TouchableOpacity>
        </View>
    )
}