import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

const NotificationsPage = ({ navigation }) => {

  const renderRightActions = (progress, dragX, onDelete) => {
    const trans = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0, 1],
    });
    return (
      <TouchableOpacity onPress={onDelete}>
        <Animated.View style={[styles.deleteButton, { opacity: trans }]}>
          <Ionicons name="trash-bin" size={24} color="white" />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  const handleDeleteNotification = (notificationId) => {
    // Aqui você pode remover a notificação do estado ou da base de dados
    console.log('Notificação removida:', notificationId);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notificações</Text>
      </View>

      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, () => handleDeleteNotification('1'))
        }
      >
        <View style={styles.notification}>
          <Ionicons name="card-outline" size={35} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>Pagamento atrasado</Text>
            <Text style={styles.notificationSubtitle}>Faça sua transferência!</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PaymentPage')}>
            <View style={styles.iconContainer}>
              <Ionicons name="arrow-forward-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </Swipeable>

      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, () => handleDeleteNotification('2'))
        }
      >
        <View style={styles.notification}>
          <Ionicons name="location-outline" size={35} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>Localização atual</Text>
            <Text style={styles.notificationSubtitle}>Onde Samuel está agora?</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('LocationPage')}>
            <View style={styles.iconContainer}>
              <Ionicons name="arrow-forward-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </Swipeable>

      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, () => handleDeleteNotification('3'))
        }
      >
        <View style={styles.notification}>
          <Ionicons name="chatbubble-outline" size={35} color="black" />
          <View style={styles.textContainer}>
            <Text style={styles.notificationTitle}>Mensagem</Text>
            <Text style={styles.notificationSubtitle}>Motorista mandou mensagem</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('MessagePage')}>
            <View style={styles.iconContainer}>
              <Ionicons name="arrow-forward-outline" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </Swipeable>

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
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#E0E0E0', // Para criar uma borda suave
    borderWidth: 1,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Cor do texto mais escura
  },
  notificationSubtitle: {
    fontSize: 17,
    color: '#666', // Texto secundário mais suave
  },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '100%',
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#FFD942',  // Fundo amarelo
    padding: 10,  // Para centralizar o ícone
    borderRadius: 20,  // Para criar bordas arredondadas
    borderWidth: 2,  // Borda amarela mais espessa
    borderColor: '#FFD942',  // Mesma cor do fundo
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotificationsPage;