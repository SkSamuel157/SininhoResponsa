import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NotificationsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
      </View>

      <View style={styles.notification}>
        <Ionicons name="card-outline" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>Pagamento atrasado</Text>
          <Text style={styles.notificationSubtitle}>Faça sua transferência!</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-outline" size={24} color="yellow" />
        </TouchableOpacity>
      </View>

      <View style={styles.notification}>
        <Ionicons name="location-outline" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>Localização atual</Text>
          <Text style={styles.notificationSubtitle}>Onde Samuel está agora?</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-outline" size={24} color="yellow" />
        </TouchableOpacity>
      </View>

      <View style={styles.notification}>
        <Ionicons name="chatbubble-outline" size={24} color="black" />
        <View style={styles.textContainer}>
          <Text style={styles.notificationTitle}>Mensagem</Text>
          <Text style={styles.notificationSubtitle}>Motorista mandou mensagem</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-outline" size={24} color="yellow" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 50,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7F7F7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default NotificationsPage;
