import React, { useState } from "react";
import { Text,TouchableOpacity,ScrollView, View, Alert,} from "react-native";
import { styles } from "./style";

const activities: [string, number][] = [
  ["Ultimate Adventure Day", 1500],
  ["Family Explorer Package", 1500],
  ["Mountain Adventure Package", 1500],
  ["Corporate Team Challenge", 1500],
  ["Ziplining Adventure", 750],
  ["Kayaking Experience", 750],
  ["Rock Climbing Session", 750],
];

export default function calculateTotal({ navigation }: any) {
  const [selected, setSelected] = useState<number[]>([]);
  const [calculated, setCalculated] = useState(false);

  const subtotal = selected.reduce(
    (sum, index) => sum + activities[index][1],
    0
  );

  const discountRate =
    selected.length === 1 ? 0 :
    selected.length === 2 ? 0.05 :
    selected.length === 3 ? 0.10 :
    selected.length > 3 ? 0.15 : 0;

  const discountAmount = subtotal * discountRate;
  const afterDiscount = subtotal - discountAmount;
  const vat = afterDiscount * 0.15;
  const finalTotal = afterDiscount + vat;

  const toggleActivity = (index: number) => {
    setSelected((previous) =>
      previous.includes(index)
        ? previous.filter((item) => item !== index)
        : [...previous, index]
    );

    setCalculated(false);
  };

  const calculate = () => {
    if (selected.length === 0) {
      Alert.alert("No Selection", "Please select an adventure first.");
      return;
    }

    setCalculated(true);
  };

  const clearSelection = () => {
    setSelected([]);
    setCalculated(false);
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Calculate Total Fees</Text>

      <Text style={styles.text}>
        Select one or more adventure packages or activities.
      </Text>

      <Text style={styles.heading}>Available Adventures</Text>

      {activities.map(([name, price], index) => (
        <TouchableOpacity
          key={name}
          style={[
            styles.card,
            selected.includes(index) && {
              borderColor: "#245C40",
              borderWidth: 2,
            },
          ]}
          onPress={() => toggleActivity(index)}
        >
          <Text style={styles.text}>
            {selected.includes(index) ? "☑ " : "□ "}
            {name}
          </Text>

          <Text style={styles.heading}>
            R{price.toFixed(2)}
          </Text>

          <Text style={styles.muted}>
            {selected.includes(index) ? "Selected" : "Tap to select"}
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.heading}>Discount Structure</Text>

      <View style={styles.card}>
        <Text style={styles.text}>1 booking: 0% discount</Text>
        <Text style={styles.text}>2 bookings: 5% discount</Text>
        <Text style={styles.text}>3 bookings: 10% discount</Text>
        <Text style={styles.text}>More than 3 bookings: 15% discount</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.buttonText}>Calculate Total</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={clearSelection}
      >
        <Text style={styles.secondaryButtonText}>Clear Selection</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Fee Summary</Text>

      <View style={styles.card}>
        <Text style={styles.text}>
          Selected bookings: {selected.length}
        </Text>

        <Text style={styles.text}>
          Subtotal: R{subtotal.toFixed(2)}
        </Text>

        <Text style={styles.text}>
          Discount: {(discountRate * 100).toFixed(0)}%
        </Text>

        <Text style={styles.text}>
          Amount saved: R{discountAmount.toFixed(2)}
        </Text>

        <Text style={styles.text}>
          Amount after discount: R{afterDiscount.toFixed(2)}
        </Text>

        <Text style={styles.text}>
          VAT (15%): {calculated ? `R${vat.toFixed(2)}` : "Not calculated"}
        </Text>

        <Text style={styles.total}>
          Total: {calculated
            ? `R${finalTotal.toFixed(2)}`
            : "Not calculated"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!calculated) {
            Alert.alert("Calculate Fees", "Please calculate your fees first.");
            return;
          }

          navigation.navigate("Bookings", {
            total: finalTotal,
            subtotal,
            discount: discountAmount,
            vat,
            selectedItems: selected.map((index) => activities[index][0]),
          });
        }}
      >
        <Text style={styles.buttonText}>Continue to Bookings</Text>
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
