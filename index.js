// import libraries
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Create component
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText={'Albums'} />
            <AlbumList />
        </View>
    );
};

// Render it to the device
AppRegistry.registerComponent('reactNative', () => App);
