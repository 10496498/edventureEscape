import React from "react";
import {View,Text,TouchableOpacity,ScrollView,Linking,Alert,} from "react-native";
import { styles } from "./style";

export default function contactDetails({ navigation }: any) {
  const callBusiness = async () => {
    const phone = "0700500890";

    try {
      await Linking.openURL(`tel:${phone}`);
    } catch {
      Alert.alert("Error", "Unable to open the phone application.");
    }
  };

  const emailBusiness = async () => {
    const email = "Escapeinfo@adventureescape.co.za";

    try {
      await Linking.openURL(`mailto:${email}`);
    } catch {
      Alert.alert("Error", "Unable to open the email application.");
    }
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Contact Us</Text>

      <Text style={styles.text}>
        We're here to help with your next adventure.
      </Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Adventure Escape SA</Text>

        <Text style={styles.text}>Phone: 070 050 0890</Text>

        <Text style={styles.text}>
          Email: Escapeinfo@adventureescape.co.za
        </Text>

        <Text style={styles.text}>
          Location: Western Cape, South Africa
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={callBusiness}>
        <Text style={styles.buttonText}>Call Us</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={emailBusiness}>
        <Text style={styles.buttonText}>Email Us</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Follow Our Adventures</Text>

      <Text style={styles.text}>
        Follow us on social media for updates and activities.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.buttonText}>About Us</Text>
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
