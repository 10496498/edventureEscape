import React from "react";
import {View,Text,Image,TouchableOpacity,ScrollView,} from "react-native";
import { styles } from "./style";

export default function AboutusScreen({ navigation }: any) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1000",
        }}
        style={styles.hero}
        resizeMode="cover"
      />

      <Text style={styles.title}>About Us</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Adventure Escape SA was established in 2024 and offers outdoor
          adventure experiences throughout the Western Cape.
        </Text>
      </View>

      <Text style={styles.heading}>Our Vision</Text>

      <Text style={styles.text}>
        To provide exciting and memorable outdoor experiences.
      </Text>

      <Text style={styles.heading}>Our Mission</Text>

      <Text style={styles.text}>
        To connect individuals, families, schools, tourists and groups
        with nature through outdoor adventures.
      </Text>

      <Text style={styles.heading}>Our Services</Text>

      <Text style={styles.text}>
        We offer adventure packages, outdoor activities and experiences
        for different types of customers.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
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
