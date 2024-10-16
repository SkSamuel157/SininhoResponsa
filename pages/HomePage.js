import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from './CustomHeader';

const HomePage = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <CustomHeader 
        title="HOME" 
        onProfilePress={() => navigation.navigate('QuadroAvisosPage')} 
        onNotificationPress={() => navigation.navigate('Notificações')} 
      />
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Conteúdo da Página Principal</Text>
    </View>
  );
};

export default HomePage;
