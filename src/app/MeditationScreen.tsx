import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // <- para ícones VR
import MeditationSessionCard, { Session } from './MeditationSessionCard';
import { router, useRouter } from 'expo-router';

// Sessões (removi a "Energia Matinal" para abrir espaço pro VR)
const meditationSessions: Session[] = [
  {
    id: 1,
    title: 'Respiração Profunda',
    description: 'Acalme sua mente e corpo com foco na respiração.',
    time: 5,
    iconName: 'wind',
    iconBgColor: '#4A90E2', // Azul claro
  },
  {
    id: 2,
    title: 'Sono Profundo',
    description: 'Prepare-se para uma noite de sono relaxante e reparador.',
    time: 15,
    iconName: 'moon',
    iconBgColor: '#673AB7', // Roxo/Azul escuro
  },
];

const MeditationScreen: React.FC = () => {
  const handleStartSession = (sessionId: number) => {
    const session = meditationSessions.find(s => s.id === sessionId);
    Alert.alert('Iniciando Sessão', `Você iniciou a sessão: ${session?.title}`);
  };

  const handleStartVR = () => {
    // Aqui entra a integração VR futuramente
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <View style={styles.mainIconWrapper}>
          <Feather name="aperture" size={40} color="#FFFFFF" /> 
        </View>
        <Text style={styles.mainTitle}>Espaço de Meditação</Text>
        <Text style={styles.mainSubtitle}>Encontre sua calma interior. Respire fundo.</Text>
      </View>

      {/* Sessões normais */}
      <View style={styles.sessionsSection}>
        <Text style={styles.sectionTitle}>Escolha sua Sessão</Text>
        
        {meditationSessions.map(session => (
          <MeditationSessionCard 
            key={session.id} 
            session={session} 
            onPress={handleStartSession} 
          />
        ))}

        {/* Card Especial VR */}
        <TouchableOpacity style={styles.vrCard} onPress={handleStartVR}>
          <View style={styles.vrIconWrapper}>
            <MaterialCommunityIcons name="virtual-reality" size={34} color="#fff" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.vrTitle}>Imersão em VR</Text>
            <Text style={styles.vrDescription}>
              Coloque seus óculos VR e mergulhe em um ambiente meditativo único.
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={{ height: 50 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingBottom: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  mainIconWrapper: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: '#1ABC9C',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textAlign: 'center',
  },
  mainSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
  sessionsSection: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  vrCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7043',
    padding: 18,
    borderRadius: 16,
    marginTop: 15,
    shadowColor: '#FF5722',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  vrIconWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D84315',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  vrTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  vrDescription: {
    fontSize: 14,
    color: '#FBE9E7',
  },
});

export default MeditationScreen;
