import React, { useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet } from 'react-native';
import mainStyle from '../styles/style';
import DefaultButton from '../components/DefaultButton';
import ProvideNameOverlay from '../components/ProvideNameOverlay';
import { connect } from 'react-redux';
import { addPlace } from '../redux/actions/structureActions';
import firestore from '@react-native-firebase/firestore';

const StructureScreen = ({ places }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <View style={mainStyle.viewStyle}>
      <View style={styles.structureStyle}>
        <SafeAreaView style={styles.containerStyle}>
          <FlatList
            data={places}
            renderItem={({ item }) => (
              null
            )}
          />
        </SafeAreaView>
        <DefaultButton
          buttonText="Add area"
          onClick={toggleOverlay}
        />
        <ProvideNameOverlay
          warehouseLevel="Area"
          isVisible={visible}
          toggleOverlay={toggleOverlay}          
        />
      </View>
    </View>
  );
}

const mapStateToProps = ({ structure }) => {
  const { places } = structure;
  return { places };
}

export default connect(
  mapStateToProps,
  { addPlace }
)(StructureScreen);

const styles = StyleSheet.create({
  structureStyle: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  containerStyle: {
    flex: 1
  }
});
