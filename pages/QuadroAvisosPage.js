import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const QuadroAvisosPage = () => {
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    // Aqui você pode integrar com o Firebase para enviar a notificação
    console.log('Notificação enviada:', message);
    setMessage(''); // Limpa o campo após o envio
  };

  const handleClearMessage = () => {
    setMessage(''); // Limpa o campo de texto
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Avisos</Text>
      <Text style={styles.subtitle}>
        Quadro de avisos foi criado para mensagens de emergência, que aparecerão para todos os responsáveis.
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Digite sua mensagem aqui..."
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={handleClearMessage}>
          <Text style={styles.buttonText}>Limpar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sendButton} onPress={handleSendNotification}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    height: 150,
    textAlignVertical: 'top', // Mantém o texto no topo do TextInput
    marginBottom: 20,
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clearButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#FFD942',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default QuadroAvisosPage;
