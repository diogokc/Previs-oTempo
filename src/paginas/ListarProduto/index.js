import React, { useState, useEffect, useCallback } from "react";
import { View, Text, TouchableOpacity, FlatList, RefreshControl, SafeAreaView } from "react-native";

import api from "../../services/api";
import style from "./style";

import { FontAwesome } from "@expo/vector-icons";

export default function ListarProduto({ navigation }) {

    const [produtos, setProdutos] = useState([])
    const [refreshing, setRefreshing] = useState(false)
    const [load, setLoad] = useState(true)

    useEffect(() => {
        atualizarLista();
        navigation.addListener('focus', () => setLoad(!load))
    }, [load, navigation]);

    function atualizarLista() {
        api
            .get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((error) => {
                console.log("Erro: ", error.message);
            })

        setRefreshing(false);
    }


    function excluirProduto(id) {

        try {
            const response = api.delete("/produtos/" + id, id);

        } catch (error) {
            console.log("Erro ao excluir: " + error.message)
        }
        
        onRefresh();
    }

    const onRefresh = () => {
        setRefreshing(true);
        atualizarLista();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={style.container}>
                <FlatList

                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }

                    extraData={produtos}
                    showsVerticalScrollIndicator={true}
                    data={produtos}

                    renderItem={({ item }) => {
                        return (
                            <View style={style.Produtos}>
                                <Text
                                    onPress={() => navigation.navigate("AlterarProduto", {id: item.id, nome: item.nome, qtde: item.quantidade, longitude : item.longitude, latitude: item.latitude,})}
                                    style={style.DescriptionProduto}>
                                    {item.nome}
                                </Text>

                                <TouchableOpacity style={style.mapa}
                                    onPress={() => navigation.navigate("Tempo", {id: item.id, longitude : item.longitude, latitude: item.latitude, })}
                                >
                                    <FontAwesome name="cloud" size={20} color="blue" />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.mapa}
                                    onPress={() => navigation.navigate("Mapa", {id: item.id, longitude : item.longitude, latitude: item.latitude, })}
                                >
                                    <FontAwesome name="map" size={20} color="red" />
                                </TouchableOpacity>

                                <TouchableOpacity style={style.deleteProduto}
                                    onPress={() => excluirProduto(item.id)}
                                >
                                    <FontAwesome
                                        name="trash"
                                        size={20}
                                        color="#007bff"
                                        paddingRight="20"
                                    >
                                    </FontAwesome>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />

                <TouchableOpacity
                    style={style.buttonNewProduto}
                    onPress={() => navigation.navigate("IncluirProduto")}>
                    <Text style={style.iconButton}>+</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>

    )

}
