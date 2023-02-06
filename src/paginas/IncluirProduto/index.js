import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./style";
import api from "../../services/api";

export default function IncluirProduto({ navigation }, props) {

    const [param_nome, setParam_nome] = useState(null);
    const [param_qtde, setParam_qtde] = useState(null);
    const [param_long, setParam_long] = useState(null);
    const [param_lat, setParam_lat] = useState(null);

    function incluirProduto() {

        const produto = {
            id: 0,
            nome: param_nome,
            quantidade: param_qtde,
            latitude: param_lat,
            longitude: param_long
        }

        try {
            const response = api.post("/produtos", produto)
        } catch (error) {
            console.log("Erro ao incluir: " + error.message)
        }

        navigation.navigate("ListarProduto");
    }



    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do Local</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Nome do Local"
                onChangeText={setParam_nome}
                value={param_nome}
            />

            <Text style={styles.label}>Quantidade</Text>
            <TextInput
                style={styles.input}
                type="text"
                keyboardType="numeric"
                placeholder="Informe a quantidade"
                onChangeText={setParam_qtde}
                value={param_qtde}
            />

            <Text style={styles.label}>Latitude</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Latitude"
                onChangeText={setParam_lat}
                value={param_lat}
            />
            
            <Text style={styles.label}>Longitude</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Longitude"
                onChangeText={setParam_long}
                value={param_long}
            />

            <TouchableOpacity style={styles.buttonNewProduto} onPress={() => {
                incluirProduto()
            }}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}