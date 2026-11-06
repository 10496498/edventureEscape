import React from "react";
import {View,Text, Image,TouchableOpacity, ScrollView,} from "react-native";
import { styles } from "./style";

export default function destinationdetailsscreen({ navigation, route }: any) {
  const destinationName =
    route?.params?.destinationName || "Table Mountain";

  const location =
    route?.params?.location || "Cape Town, Western Cape";

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1000",
        }}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.title}>{destinationName}</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Destination Information</Text>

        <Text style={styles.text}>Location: {location}</Text>

        <Text style={styles.text}>
          Discover the natural beauty and outdoor scenery of this
          destination in the Western Cape.
        </Text>

        <Text style={styles.text}>
          Visitors can enjoy the surroundings, explore the area and
          experience the beauty of nature.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CalculateFees")}
      >
        <Text style={styles.buttonText}>Book an Adventure</Text>
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
