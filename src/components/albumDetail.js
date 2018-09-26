import React from 'react';
import { View, Text } from 'react-native';
import Card from './cart';

const Album = (props) => {
    const { album } = props;

    return (
        <View>
            <Text>{album.title}</Text>
        </View>
    );
};

export default Album;
