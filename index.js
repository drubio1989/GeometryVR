import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Box,
  Cylinder,
  Plane,
  Sphere,
  asset
} from 'react-360';
import Entity from 'Entity';

export default class GeometryVR extends React.Component {
  render() {
    return (
      <View>
      <Box dimWidth={0.5} dimHeight={0.5} dimDepth={0.5}style={{ color: 'green', transform: [{translate: [-1, 0, 0]}]}}/>
      <Sphere style={{ color: 'red', transform: [{ translateX: 0 }] }}/>
      <Cylinder radiusTop={0.25} radiusBottom={0.25} dimHeight={2} segments={12} style={{ color:'yellow', transform: [{translate: [1, 0, 0]}]}}/>
      <Plane dimWidth={10} dimHeight={10} style={{ color: 'purple', transform: [{translate: [0, -5, -5]},  { rotateX: -90 }]}}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('GeometryVR', () => GeometryVR);
