import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MainScreenState } from './BottomNav';

interface SidebarProps {
  onNavigate: (screen: MainScreenState) => void;
  activeScreen: MainScreenState;
}

const Sidebar: React.FC<SidebarProps> = ({ onNavigate, activeScreen }) => {
  const tabs: { label: string; state: MainScreenState }[] = [
    { label: 'Início', state: 'dashboard' },
    { label: 'Humor', state: 'mood' },
    { label: 'Hábitos', state: 'habit' },
    { label: 'Cuidados', state: 'care' },
    { label: 'Meditação', state: 'meditation' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const isActive = tab.state === activeScreen;
        return (
          <TouchableOpacity
            key={tab.state}
            style={[styles.tabButton, isActive && styles.activeTab]}
            onPress={() => onNavigate(tab.state)}
          >
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>{tab.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: 100, backgroundColor: '#fff', paddingTop: 50, alignItems: 'center' },
  tabButton: { paddingVertical: 15, width: '100%', alignItems: 'center' },
  tabText: { color: '#555', fontSize: 16 },
  activeTab: { backgroundColor: '#EDE9FE' },
  activeTabText: { color: '#4F46E5', fontWeight: '600' },
});

export default Sidebar;
