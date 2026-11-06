import React, { useState } from "react";
import {  View,  Text,  Image,  TouchableOpacity,  TextInput,
  ScrollView,
    Alert,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

import { styles, colors } from "./style";

export default function splashscreen({ navigation }: any) {
    const [formType, setFormType] = useState<"none" | "signin" | "login">("none");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const openForm = (type: "signin" | "login") => {
        setFormType(type);
        setFullName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setShowPassword(false);
    };

    const handleAccount = () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Missing Information", "Enter your email and password.");
            return;
        }

        if (!email.includes("@")) {
            Alert.alert("Invalid Email", "Enter a valid email address.");
            return;
        }

        if (formType === "signin") {
            if (!fullName.trim()) {
                Alert.alert("Missing Name", "Enter your full name.");
                return;
            }

            if (password !== confirmPassword) {
                Alert.alert("Password Error", "Your passwords do not match.");
                return;
            }

            Alert.alert(
                "Registration",
                "Your details are valid. Account registration still needs a backend."
            );
        } else {
            Alert.alert(
                "Login",
                "Your details are valid. Login authentication still needs a backend."
            );
        }
    };

  return (
       <View style={styles.screen}>
         <KeyboardAvoidingView
            style={{ flex: 1 }}
             behavior={Platform.OS === "ios" ? "padding" : undefined}
            >
        <ScrollView
            style={styles.scroll}
                contentContainerStyle={styles.content}
                 showsVerticalScrollIndicator={true}
                  keyboardShouldPersistTaps="handled"
                  keyboardDismissMode="on-drag"
                >
                    <Image
                        source={{
                            uri: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1000",
                        }}
                        style={styles.hero}
                        resizeMode="cover"
                    />

                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.title}>
                            ADVENTURE ESCAPE SA
                        </Text>

                        <Text style={[styles.text, { textAlign: "center" }]}>
                            Escape the ordinary, experience the adventure!
                        </Text>

                        <Text style={styles.heading}>
                            Welcome, Adventurer!
                        </Text>
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => openForm("signin")}
                    >
                        <Text style={styles.buttonText}>
                            Sign In / Create Account
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => openForm("login")}
                    >
                        <Text style={styles.buttonText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.secondaryButton}
                        onPress={() => navigation.replace("Home")}
                    >
                        <Text style={styles.secondaryButtonText}>
                            Stay Signed Out
                        </Text>
                    </TouchableOpacity>

                    {formType !== "none" && (
                        <View style={styles.card}>
                            <Text style={styles.heading}>
                                {formType === "signin"
                                    ? "Create Your Account"
                                    : "Welcome Back"}
                            </Text>

                            {formType === "signin" && (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Full Name"
                                    value={fullName}
                                    onChangeText={setFullName}
                                    autoCapitalize="words"
                                />
                            )}

                            <TextInput
                                style={styles.input}
                                placeholder="Email Address"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />

                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                                autoCapitalize="none"
                            />

                            {formType === "signin" && (
                                <TextInput
                                    style={styles.input}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!showPassword}
                                    autoCapitalize="none"
                                />
                            )}

                            <TouchableOpacity
                                onPress={() => setShowPassword(!showPassword)}
                            >
                                <Text style={{
                                    color: colors.green,
                                    marginBottom: 12
                                }}>
                                    {showPassword ? "Hide Password" : "Show Password"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleAccount}
                            >
                                <Text style={styles.buttonText}>
                                    {formType === "signin"
                                        ? "Create Account"
                                        : "Log In"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() =>
                                    openForm(
                                        formType === "signin" ? "login" : "signin"
                                    )
                                }
                            >
                                <Text style={{
                                    color: colors.green,
                                    textAlign: "center",
                                    margin: 12
                                }}>
                                    {formType === "signin"
                                        ? "Already registered? Log In"
                                        : "New user? Create an Account"}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setFormType("none")}
                            >
                                <Text style={{
                                    color: colors.grey,
                                    textAlign: "center"
                                }}>
                                    Close Form
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}
