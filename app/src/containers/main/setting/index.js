import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, StatusBar} from 'react-native';
import {Layout, Text, Button} from "react-native-ui-kitten";
import ProfileCard from "../../../components/ProfileCard";
import MenuGroup from "../../../components/MenuGroup";


export default class SettingScreen extends Component {

    render() {
        return (
            <Layout>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView style={{
                        backgroundColor: "#c9c9c9"
                    }}>
                        <ProfileCard navigation={this.props.navigation}/>
                        <MenuGroup navigation={this.props.navigation}/>
                    </ScrollView>
                </SafeAreaView>
            </Layout>
        );
    }
}
