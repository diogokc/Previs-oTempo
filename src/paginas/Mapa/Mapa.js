import MapView from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { View, StyleSheet } from "react-native";
import React, {useState} from 'react';

export default function Mapa({ route }) {
    
    const longitude  = parseFloat(route.params.longitude)
    const latitude  = parseFloat(route.params.latitude)
    const latitudeDelta = 0.015
    const longitudeDelta = 0.0121   


    const objeto={
        longitude,
        latitude,
        latitudeDelta,
        longitudeDelta
    }

    console.log(objeto)
    return (
        <View style={styles.container}>
            <MapView
                showsUserLocation={true}
                style={styles.map}
                initialRegion={objeto}
            >
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});