import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';
import BatHome from '../../components/BatHome/BatHome';
import BatForm from '../../components/BatForm/BatForm';

export default function Home() {
    const [visibleHome, setVisibleHome] = useState(true);
    const [visibleForm, setVisibleForm] = useState(false);

    const handleVisibleForm = () => {
        setVisibleHome(!visibleHome);
        setVisibleForm(!visibleForm);
    }

    return (
        <View style={styles.container}>
            <BatHome visible={visibleHome} handleClickActive={handleVisibleForm} />
            <BatForm visible={visibleForm} handleClickHome={handleVisibleForm} />
            <StatusBar style="light" />
        </View>
    )
}
