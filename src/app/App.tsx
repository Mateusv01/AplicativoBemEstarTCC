import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { AuthProvider, mockAuth } from './AuthContext';
import Welcome from './Welcome';
import BottomNav from './BottomNav';

export type AppNavigationState = 'welcome' | 'main';

const App = () => {
  const [navigationState, setNavigationState] = useState<AppNavigationState>('welcome');
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    const unsubscribe = mockAuth.onAuthStateChanged((user) => {
      if (user) setNavigationState('main');
      else setNavigationState('welcome');
      setAuthInitialized(true);
    });
    return unsubscribe;
  }, []);

  const handleLoginSuccess = () => setNavigationState('main');

  if (!authInitialized) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4F46E5" />
        <Text style={styles.loadingText}>Carregando autenticação...</Text>
      </View>
    );
  }

  return (
    <AuthProvider>
      {navigationState === 'welcome' ? (
        <Welcome onLoginSuccess={handleLoginSuccess} />
      ) : (
        <BottomNav setNavigationState={setNavigationState} />
      )}
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#4F46E5', fontSize: 16 },
});

export default App;
