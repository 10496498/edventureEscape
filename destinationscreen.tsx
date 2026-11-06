import React from "react";
import {Text,Image,TouchableOpacity,ScrollView,} from "react-native";
import { styles } from "./style";

export default function destinationsscreen({ navigation }: any) {
  const places = [
    {
      name: "Cape Town",
      location: "Western Cape",
      image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800",
    },
    {
      name: "Table Mountain",
      location: "Cape Town, Western Cape",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    },
    {
      name: "Jonkershoek",
      location: "Stellenbosch, Western Cape",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800",
    },
    {
      name: "Franschhoek",
      location: "Western Cape",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    },
  ];

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Destinations</Text>

      <Text style={styles.text}>
        Explore beautiful places in the Western Cape.
      </Text>

      {places.map((place) => (
        <TouchableOpacity
          key={place.name}
          style={styles.card}
          onPress={() =>
            navigation.navigate("DestinationDetails", {
              destinationName: place.name,
              location: place.location,
            })
          }
        >
          <Image
            source={{ uri: place.image }}
            style={{
              width: "100%",
              height: 170,
              borderRadius: 12,
              marginBottom: 12,
            }}
            resizeMode="cover"
          />

          <Text style={styles.heading}>{place.name}</Text>
          <Text style={styles.muted}>{place.location}</Text>
          <Text style={styles.muted}>Tap to view destination details</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
