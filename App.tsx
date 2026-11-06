import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SplashScreen from "./splashscreen";
import HomeScreen from "./homescreen";
import ExploreScreen from "./explorescreen";
import AdventureDetailsScreen from "./adventuredetailsScreen";
import DestinationsScreen from "./destinationscreen";
import DestinationDetailsScreen from "./destinationdetailscreen";
import AboutUsScreen from "./Aboutus";
import CalculateFeesScreen from "./calculateTotal";
import BookingsScreen from "./bookingsScreen";
import BookingDetailsScreen from "./bookingDetailsScreen";
import ProfileScreen from "./profilescreen";
import ContactScreen from "./contactDetails";

type Navigation = {
    navigate: (name: string) => void;
    replace: (name: string) => void;
    goBack: () => void;
};

export default function App() {
    const [history, setHistory] = useState<string[]>(["Splash"]);

    const screen = history[history.length - 1];

    const navigation: Navigation = {
        navigate: (name) => {
            setHistory((old) => [...old, name]);
        },

        replace: (name) => {
            setHistory((old) => [...old.slice(0, -1), name]);
        },

        goBack: () => {
            setHistory((old) =>
                old.length > 1 ? old.slice(0, -1) : old
            );
        },
    };

    const screens: Record<string, React.ComponentType<any>> = {
        Splash: SplashScreen,
        Home: HomeScreen,
        Explore: ExploreScreen,
        AdventureDetails: AdventureDetailsScreen,
        Destinations: DestinationsScreen,
        DestinationDetails: DestinationDetailsScreen,
        About: AboutUsScreen,
        CalculateFees: CalculateFeesScreen,
        Bookings: BookingsScreen,
        BookingDetails: BookingDetailsScreen,
        Profile: ProfileScreen,
        Contact: ContactScreen,
    };

    const CurrentScreen = screens[screen] || HomeScreen;

    return (
        <View style={appStyles.container}>
            <CurrentScreen navigation={navigation} />
        </View>
    );
}

const appStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
