import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './cart';
import CardSection from './cardSection';

const Album = ({ album }) => {
    const { title, artist, image, thumbnail_image } = album;
    const {
        albumHeaderStyle,
        albumHeaderTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
                </View>
                <View style={albumHeaderStyle}>
                    <Text style={albumHeaderTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={imageStyle} />
            </CardSection>
        </Card>
    );
};

const styles = {
    albumHeaderStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    albumHeaderTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default Album;
