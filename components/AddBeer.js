import React from 'react';
import { View, Text, StyleSheet, TextInput, PickerIOS, Button, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import t from 'tcomb-form-native';
import { RNCamera } from 'react-native-camera';


export default class AddBeer extends React.Component {
  constructor(props) {
    super(props);
  }
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    fetch('https://beeranking.herokuapp.com/beers', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value)
    })
      .then(res => {
        console.log(res, "succeeded");
        Alert.alert(
          'Merci',
          'La bière a bien été ajoutée',
          [
            { text: 'OK', onPress: () => console.log('Cancel Pressed') },
          ],
          { cancelable: false }
        )
      })
      .catch(console.log)

  }

  goToTakePicture() {
    console.log("go to take picture");
    this.props.navigation.navigate('TakePicture');
  }




  render() {
    return (
      <ScrollView contentContainerStyle={style.container}>
        <TouchableOpacity
          onPress={() => this.goToTakePicture()}
          style={style.capture}
        >
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>

        <Form ref={c => this._form = c}
          type={beer}
          options={options} />
        <Button
          title="Ajouter bière"
          onPress={this.handleSubmit}
        />
      </ScrollView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});

const Form = t.form.Form;

const Taste = t.enums({
  soft: 'Soft',
  bitter: 'Bitter',
  sour: "Sour",
  syrupy: "Syrupy",
  preposterous: "Preposterous"
});

const beer = t.struct({
  name: t.String,
  color: t.String,
  degree: t.Number,
  taste: Taste,
  brewery: t.String
});

const options = {
  fields: {
    name: {
      label: 'Name',
    },
    color: {
      label: 'Color',
    },
    degree: {
      label: 'Degree',
    },
    taste: {
      label: 'Taste',
    },
    brewery: {
      label: 'Brewery',
    }
  },
};

