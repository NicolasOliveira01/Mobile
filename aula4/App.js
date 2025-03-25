import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Container, Name, ProfileHeader, ProfileInfo } from './src/components/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Container>
        <ProfileHeader>
          <Avatar source={{uri: 'https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg'}}/>
          <ProfileInfo>
            <Name>Nicolas</Name>
          </ProfileInfo>
        </ProfileHeader>
      </Container>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
