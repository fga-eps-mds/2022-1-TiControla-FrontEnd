import React from "react";
import { ViewProps, View, StyleSheet} from "react-native";
import { dimensao } from "../utils/dimensoesDoDipositivo";


export default function InfoContainer({children, style={}}: ViewProps) {
    return <View style={[estilos.container, style]}>{children}</View>
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#0B4B54',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        width: dimensao.largura - 32,
        color: '#fff',
    }
})