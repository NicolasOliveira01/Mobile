import React from "react";
import { View, Text } from "react-native";

interface TarefaProps {
    titulo: string;
    descricao:string;
    lido: boolean;
    cor?: string;
    // cor não é necessário definir
}

const Tarefa: React.FC<TarefaProps> = ({descricao, titulo, lido}) =>{
    return(
        <View>
            <Text style={{fontSize: 70}}>{titulo}</Text>
            <Text style = {{fontSize: 70, color : lido ? "blue" : "black"}}>{descricao}</Text>
        </View>
    )
}
// se for lido vai ser blue e se não for lido vai ser black

export default Tarefa;