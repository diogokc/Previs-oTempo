import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../config/firebase'

export default function Login( {navigation} ) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErroLogin] = useState("")

    const loginFirebase = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Passou")
                navigation.navigate("ListarProduto", {uid: userCredential.user.uid,});
            })
            .catch((error) => {
                setErroLogin(true)
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
                // ..
            });
            
    }

    useEffect(() => {

    }, []);
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder={"entre com o seu email"}
                type="text"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder={"entre com o seu senha"}
                type="text"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {email === "" || password === ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={styles.buttonLogin}
                    onPress={loginFirebase}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            }
            <Text style={styles.linkSubscribe}
                onPress={() => navigation.navigate("LoginEmpresa")}>
                Se cadastre Agora...
            </Text>
            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}