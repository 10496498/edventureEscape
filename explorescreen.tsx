import React from "react";
import { View,Text,Image,TouchableOpacity, ScrollView,} from "react-native";
import { styles } from "./style";

export default function explorescreen({ navigation }: any) {
  const activities = [
    {
      name: "Ziplining Adventure",
      price: 750,
      image: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=800",
    },
    {
      name: "Kayaking Experience",
      price: 750,
      image: "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?w=800",
    },
    {
      name: "Rock Climbing Session",
      price: 750,
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800",
    },
    {
      name: "Ultimate Adventure Day",
      price: 1500,
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800",
    },
  ];

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Explore Adventures</Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000",
        }}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.text}>
        Discover outdoor experiences in the Western Cape.
      </Text>

      {activities.map((activity) => (
        <TouchableOpacity
          key={activity.name}
          style={styles.card}
          onPress={() =>
            navigation.navigate("AdventureDetails", {
              activityName: activity.name,
              price: activity.price,
            })
          }
        >
          <Image
            source={{ uri: activity.image }}
            style={{
              width: "100%",
              height: 170,
              borderRadius: 12,
              marginBottom: 12,
            }}
            resizeMode="cover"
          />

          <Text style={styles.heading}>{activity.name}</Text>
          <Text style={styles.text}>
            R{activity.price.toFixed(2)} per person/package
          </Text>
          <Text style={styles.muted}>Tap to view details</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.navigate("Destinations")}
      >
        <Text style={styles.secondaryButtonText}>View Destinations</Text>
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
