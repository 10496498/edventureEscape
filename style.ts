import { StyleSheet } from "react-native";

export const colors = {
    green: "#245C40",
    darkGreen: "#163D2B",
    lightGreen: "#EAF3EC",
    cream: "#FAF8F1",
    white: "#FFFFFF",
    text: "#24352B",
    grey: "#68756D",
    orange: "#E99A43",
};

export const styles = StyleSheet.create({
    screen: {
    flex: 1,
    backgroundColor: colors.cream,
},

scroll: {
    flex: 1,
    backgroundColor: colors.cream,
},

content: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 80,
},
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.darkGreen,
        marginBottom: 12,
    },

    heading: {
        fontSize: 19,
        fontWeight: "bold",
        color: colors.green,
        marginTop: 8,
        marginBottom: 8,
    },

    text: {
        fontSize: 16,
        color: colors.text,
        lineHeight: 24,
        marginBottom: 10,
    },

    muted: {
        fontSize: 14,
        color: colors.grey,
        marginBottom: 5,
    },

    hero: {
        width: "100%",
        height: 220,
        borderRadius: 18,
        marginBottom: 20,
    },

    card: {
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#DCE7DD",
    },

    button: {
        backgroundColor: colors.green,
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
    },

    buttonText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "bold",
    },

    secondaryButton: {
        backgroundColor: colors.lightGreen,
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 5,
    },

    secondaryButtonText: {
        color: colors.darkGreen,
        fontSize: 16,
        fontWeight: "bold",
    },

    total: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.green,
        marginVertical: 12,
    },

    input: {
        borderWidth: 1,
        borderColor: "#CCCCCC",
        borderRadius: 8,
        padding: 12,
        marginBottom: 14,
        backgroundColor: colors.white,
        color: colors.text,
    },
});
