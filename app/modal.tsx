import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal Padrão</Text>
      <Text style={styles.content}>
        Este é um modal do template do Expo Router.
      </Text>

      <TouchableOpacity onPress={() => router.dismiss()}>
        <Text style={styles.link}>Fechar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  content: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  link: { color: "#007AFF", fontSize: 16 },
});
 