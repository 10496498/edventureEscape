import React from "react";
import {View,Text,TouchableOpacity,ScrollView,} from "react-native";
import { styles } from "./style";

export default function bookingsScreen({ navigation, route }: any) {
  const booking = route?.params;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My Bookings</Text>

      {booking ? (
        <View style={styles.card}>
          <Text style={styles.heading}>New Booking Estimate</Text>

          <Text style={styles.text}>
            Selected adventures:
          </Text>

          {booking.selectedItems?.map((item: string, index: number) => (
            <Text style={styles.text} key={`${item}-${index}`}>
              {index + 1}. {item}
            </Text>
          ))}

          <Text style={styles.text}>
            Subtotal: R{booking.subtotal.toFixed(2)}
          </Text>

          <Text style={styles.text}>
            Discount: R{booking.discount.toFixed(2)}
          </Text>

          <Text style={styles.text}>
            VAT: R{booking.vat.toFixed(2)}
          </Text>

          <Text style={styles.total}>
            Total: R{booking.total.toFixed(2)}
          </Text>

          <Text style={styles.muted}>
            This is a booking estimate, not a confirmed booking.
          </Text>
        </View>
      ) : null}

      <View style={styles.card}>
        <Text style={styles.heading}>Booking 01</Text>
        <Text style={styles.text}>Mountain Adventure</Text>
        <Text style={styles.muted}>Status: Confirmed (example)</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("BookingDetails")}
        >
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Booking 02</Text>
        <Text style={styles.text}>Hiking Adventure</Text>
        <Text style={styles.muted}>Status: Completed (example)</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CalculateFees")}
      >
        <Text style={styles.buttonText}>Book Another Adventure</Text>
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
