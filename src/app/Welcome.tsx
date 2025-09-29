// Welcome.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// *** IMPORTAÇÃO CORRIGIDA PARA EXPO ***
import { LinearGradient } from 'expo-linear-gradient'; 
import Icon from 'react-native-vector-icons/Feather'; 
import GoogleIcon from 'react-native-vector-icons/FontAwesome'; 
import { useAuth } from './AuthContext';

const { height } = Dimensions.get('window');

const Welcome: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
// ... (o restante do componente é o mesmo)
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Tentativa de login com:', email, password);
    login(); 
    onLoginSuccess(); 
  };

  const handleGoogleLogin = () => {
    console.log('Entrar com Google (a implementar)');
  };

  return (
    <View style={styles.container}>
      {/* 1. Gradiente de Fundo Roxo */}
      <LinearGradient 
        colors={['#8A2BE2', '#4B0082']} // Cores baseadas no roxo escuro
        style={styles.gradientBackground}
      />
      
      {/* 2. Cartão de Login Branco */}
      <View style={styles.loginCard}>
        
        {/* Logo/Título */}
        <Icon name="heart" size={30} color="#8A2BE2" style={styles.heartIcon} />
        <Text style={styles.logoTitle}>Bem-Estar+</Text>
        <Text style={styles.logoSubtitle}>Acesse ou crie sua conta.</Text>
        
        <Text style={styles.cardTitle}>Acessar Conta</Text>

        {/* Campo de E-mail */}
        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Campo de Senha */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#999" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Botão Entrar Principal */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Icon name="arrow-right" size={24} color="#FFF" style={styles.loginIcon} />
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signupText}>Não tem conta? Cadastre-se aqui.</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OU</Text>

        {/* Botão Entrar com Google */}
        <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
          <GoogleIcon name="google" size={22} color="#C44535" style={styles.googleIcon} />
          <Text style={styles.googleButtonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ... (os estilos continuam os mesmos)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  loginCard: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
  heartIcon: {
    marginBottom: 10,
  },
  logoTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
  },
  logoSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F5F5FF', 
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    paddingVertical: 0,
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#8A2BE2', // Roxo principal
    borderRadius: 8,
    paddingVertical: 14,
    marginTop: 5,
    marginBottom: 10,
  },
  loginIcon: {
    marginRight: 10,
    transform: [{ rotate: '180deg' }], 
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#8A2BE2',
    fontSize: 14,
    marginTop: 5,
  },
  orText: {
    color: '#999',
    fontSize: 14,
    marginVertical: 15,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  googleIcon: {
    marginRight: 10,
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Welcome;