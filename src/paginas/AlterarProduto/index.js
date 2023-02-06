import React, { useState, useEffect } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import styles from "./style"
import api from "../../services/api";

export default function AlterarProduto({ navigation, route }) {

    const idProduto = route.params.id;
    const [nome, setNome] = useState(route.params.nome)
    const [qtde, setQtde] = useState(route.params.qtde)
    const [longitude, setlong] = useState(route.params.longitude)
    const [latitude, setlat] = useState(route.params.latitude)

    console.log(route)
    function alterarProduto(param_id, param_nome, param_qtde, param_long, param_lat) {

        const produto = {
            id: param_id,
            nome: param_nome,
            quantidade: param_qtde,
            longitude: param_long,
            latitude: param_lat
        }

        try {

            const response = api.put("/produtos/" + param_id, produto)

        } catch (error) {
            console.error("Erro ao alterar: " + error.message)
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
                onChangeText={setNome}
                value={nome}
            />

            <Text style={styles.label}>Quantidade</Text>
            <TextInput
                style={styles.input}
                type="text"
                keyboardType="numeric"
                onChangeText={setQtde}
                value={qtde.toString()}
            />

            <Text style={styles.label}>Latitude</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Latitude"
                onChangeText={setlat}
                value={latitude}
            />

            <Text style={styles.label}>Longitude</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder="Longitude"
                onChangeText={setlong}
                value={longitude}
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => {
                    alterarProduto(idProduto, nome, qtde)
                }}>
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )

}