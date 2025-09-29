import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

// Tipagem para o objeto Hábito
export interface Habit {
  id: number;
  text: string;
  completed: boolean;
}

// Tipagem para as Props do componente
interface HabitItemProps {
  habit: Habit;
  onToggle: (habitId: number, isCompleted: boolean) => void;
}

const HabitItem: React.FC<HabitItemProps> = ({ habit, onToggle }) => {
  const [isCompleted, setIsCompleted] = useState(habit.completed);

  // Função para lidar com a alternância de estado
  const handleToggle = () => {
    const newState = !isCompleted;
    setIsCompleted(newState);
    onToggle(habit.id, newState);
  };

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={handleToggle}
      activeOpacity={0.7}
    >
      {/* Checkbox customizado */}
      <View style={[styles.checkbox, isCompleted && styles.checkboxCompleted]}>
        {isCompleted && <Feather name="check" size={18} color="#FFFFFF" />}
      </View>
      
      <Text style={styles.habitText}>{habit.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingHorizontal: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#CCCCCC',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxCompleted: {
    backgroundColor: '#6C63FF',
    borderColor: '#6C63FF',
  },
  habitText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default HabitItem;