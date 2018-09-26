import React from 'react';
import { Text } from 'react-native';
import Card from './cart';
import CardSection from './cardSection';

const Album = (props) => {
    const { album } = props;

    return (
        <Card>
            <CardSection>
                <Text>{album.title}</Text>
            </CardSection>
        </Card>
    );
};

export default Album;
