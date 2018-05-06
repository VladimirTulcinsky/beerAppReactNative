import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Details extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { params } = this.props.navigation.state;
        const { beer } = params;

        console.log(beer, "biere passee en param");

        return (
            <View style={styles.container}>
                <Text>{beer.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
