import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        maxHeight: '80%',
    },
    logoContainer: {
        display: 'flex',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    viewInput: {
        marginTop: 30,
        marginBottom: 10,
    },
    input: {
        borderColor: 'black',
        backgroundColor: 'gray',
        color: 'white',
        width: 300,
        height: 50,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 2,
        marginVertical: 10,
    },
    label: {
        color: "white",
        fontWeight: 'bold',
    },
});

export default styles
