import React from "react";
import { View, Text, Image,TouchableOpacity,ScrollView,} from "react-native";
import { styles } from "./style";

export default function profilescreen({ navigation }: any) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500",
          }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            marginBottom: 15,
          }}
        />

        <Text style={styles.title}>My Profile</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Adventure Customer</Text>
        <Text style={styles.text}>Email: customer@example.com</Text>
        <Text style={styles.text}>Phone: 000 000 0000</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bookings")}
      >
        <Text style={styles.buttonText}>My Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.buttonText}>Help & Support</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
