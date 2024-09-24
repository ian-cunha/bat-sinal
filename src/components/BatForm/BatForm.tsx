import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native"
import styles from "./Style"
import batLogo from '../../../assets/batlogo.png'

interface FormProp {
    visible: boolean,
    handleClickHome: () => void
}

export default function BatForm(props: FormProp) {
    return (
        <View style={[styles.container, { display: props.visible ? 'flex' : 'none' }]}>
            <View style={styles.logoContainer}>
                <Image
                    source={batLogo}
                    style={{
                        resizeMode: 'contain',
                        height: 40,
                    }}
                />
            </View>

            <ScrollView style={styles.viewInput}>
                <Text style={styles.label} aria-label="Nome Completo" nativeID="name">Nome completo</Text>
                <TextInput style={styles.input} placeholder="Nome completo" aria-labelledby="name" />

                <Text style={styles.label} aria-label="Telefone" nativeID="tel">Telefone</Text>
                <TextInput style={styles.input} placeholder="(00)98585-8585" aria-labelledby="tel" />

                <Text style={styles.label} aria-label="Localização" nativeID="location">Localização</Text>
                <TextInput style={styles.input} placeholder="Localização" aria-labelledby="location" />

                <Text style={styles.label} aria-label="Observação" nativeID="observation">Oberservação</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={[styles.input, { height: 150, textAlignVertical: 'top', }]} placeholder="Obeservação" aria-labelledby="observation" />
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={props.handleClickHome}>
                <Text style={styles.text}>Enviar</Text>
            </TouchableOpacity>
        </View>
    )
}
