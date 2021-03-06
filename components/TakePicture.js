import React from 'react';
import { View, Text, StyleSheet, TextInput, PickerIOS, Button, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import t from 'tcomb-form-native';
import { RNCamera } from 'react-native-camera';
import { StackNavigator } from 'react-navigation';

export default class TakePicture extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function () {
    if (this.camera) {
      const options = { quality: 1, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
      this.props.navigation.state.params.returnData(data);
      this.props.navigation.goBack();
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
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
