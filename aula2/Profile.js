import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profile(props) {
// nome de arquivo mesmo nome da função e sempre a primeira letra maiúscula
  return (
    <View style={styles.container}>
        <Image source={{uri: props.img}} style={{width:200, height: 200}}></Image>
        <Text>Nome: {props.nome}</Text>
        <Text>Idade: {props.idade}</Text>
        <Text>Email: {props.email}</Text>
        <StatusBar style="auto" />
    </View>
  );
}

// para usar imagem podem usar Imagem com uri dentro de source ou salva a imagem e faz o import da imagem com um nome que eu quiser


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
