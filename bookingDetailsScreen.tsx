import React from "react";
import {View, Text, TouchableOpacity, ScrollView,} from "react-native";
import { styles } from "./style";

export default function bookingDetailsScreen({ navigation, route }: any) {
  const booking = route?.params;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Booking Details</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>
          {booking?.activityName || "Mountain Adventure"}
        </Text>

        <Text style={styles.text}>Date: Not selected</Text>
        <Text style={styles.text}>Location: Western Cape</Text>

        <Text style={styles.text}>
          Price: R{Number(booking?.price || 1500).toFixed(2)}
        </Text>

        <Text style={styles.text}>Status: Example booking</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Bookings")}
      >
        <Text style={styles.buttonText}>Back to Bookings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.secondaryButtonText}>Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
