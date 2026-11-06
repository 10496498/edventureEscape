
import React from "react";
import {View, Text, Image,TouchableOpacity,ScrollView,} from "react-native";
import { styles } from "./style";

export default function adventuredetailsScreen({ navigation, route }: any) {
  const activityName =
    route?.params?.activityName || "Ziplining Adventure";

  const price = route?.params?.price || 750;

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1000",
        }}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.title}>{activityName}</Text>

      <View style={styles.card}>
        <Text style={styles.heading}>Adventure Information</Text>

        <Text style={styles.text}>
          Location: Western Cape, South Africa
        </Text>

        <Text style={styles.text}>
          Enjoy an exciting outdoor experience with professional
          guidance and an opportunity to explore nature.
        </Text>

        <Text style={styles.text}>
          Includes a safety briefing and relevant equipment where applicable.
        </Text>

        <Text style={styles.total}>
          Price: R{Number(price).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CalculateFees")}
      >
        <Text style={styles.buttonText}>Calculate Fees</Text>
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
