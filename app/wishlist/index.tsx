import {Image, StyleSheet, ScrollView, Text, View, Pressable} from 'react-native';

import React from "react";
import {useNavigation} from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function WishlistScreen() {
    const navigation = useNavigation();
    return (
        <ScrollView>
            <View style={styles.header}>
                {/* Back arrow */}
                <View style={styles.pageTitle}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
                    </Pressable>

                    {/* Title */}
                    <Text style={styles.title}>WISHLIST</Text>

                </View>
                {/* Right-side Icons */}
                <View style={styles.rightIcons}>
                    <Pressable>
                        <Feather name="shopping-cart" size={24} color="black" />
                    </Pressable>
                    <Pressable>
                        <Ionicons name="notifications-outline" size={24} color="black" style={styles.icon} />
                    </Pressable>
                </View>
            </View>
            <View style={styles.productsSection}>
                <View style={styles.products}>
                    <View style={styles.productCard}>
                        <Image source={require('@/assets/images/portrait-fit-woman-running-outdoor 1.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Aero Lightweight</Text>
                        <Text style={styles.productCategory}>Apparel</Text>
                        <Text style={styles.productPrice}>Rp200.000</Text>
                    </View>
                    <View style={styles.productCard}>
                        <Image source={require('@/assets/images/portrait-fit-woman-running-outdoor 1.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Aero Sport Infinity Max</Text>
                        <Text style={styles.productCategory}>Footwear</Text>
                        <Text style={styles.productPrice}>Rp450.000</Text>
                    </View>
                </View>
                <View style={styles.products}>
                    <View style={styles.productCard}>
                        <Image source={require('@/assets/images/portrait-fit-woman-running-outdoor 1.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Sport+ Runner Blue Edition</Text>
                        <Text style={styles.productCategory}>Footwear</Text>
                        <Text style={styles.productPrice}>Rp250.000</Text>
                    </View>
                    <View style={styles.productCard}>
                        <Image source={require('@/assets/images/portrait-fit-woman-running-outdoor 1.png')} style={styles.productImage} />
                        <Text style={styles.productName}>Sport+ Bag</Text>
                        <Text style={styles.productCategory}>Bag</Text>
                        <Text style={styles.productPrice}>Rp350.000</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backButton: {
        flex: 1,
    },
    pageTitle: {
        flexDirection: "row",
        width: "37%",
    },
    title: {
        flex: 2,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightIcons: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
    },
    icon: {
        marginLeft: 15,
    },
    productsSection: {
        marginBottom: 20,
    },
    products: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productCard: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 5,
        marginBottom: 15,
    },
    productImage: {
        width: '100%',
        height: 150,

        borderRadius: 10,
    },
    productName: {
        // Apply Roboto Condensed Bold font
        fontSize: 16,
        textTransform: 'uppercase',  // Make the text uppercase to match Bebas Neue style
        marginVertical: 5,
        fontFamily: 'Roboto Condensed Bold',  // Apply Roboto Condensed Bold font
    },
    productCategory: {
        fontSize: 12,
        color: '#888',
    },
    productPrice: {
        fontSize: 16,
        color: '#FF4500',
        fontWeight: 'bold',
    },
});
