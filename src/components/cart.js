import React from 'react';
import { Platform, View } from 'react-native';

const Card = () => {
    return (
        <View></View>
    );
};

const styles = {
    containerStyles: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1
            },
            android: {
                elevation: 1
            }
        })
    }
};

export default Card;
