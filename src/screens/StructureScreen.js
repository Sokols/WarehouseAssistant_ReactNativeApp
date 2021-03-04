import React, { useState } from 'react';

import { SafeAreaView, View, StyleSheet } from 'react-native';

import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import DefaultSwipeList from '../components/DefaultSwipeList';
import ProvideNameOverlay from '../components/ProvideNameOverlay';

import { connect } from 'react-redux';
import { addPlace, removePlace, setRef, setData, setMainRef } from '../redux/actions/structureActions';
import { SET_PLACES_TO_DISPLAY } from '../redux/actions/types';

const StructureScreen = ({ placesToDisplay, refLevel, addPlace, removePlace, setRef, setData }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        <DefaultSwipeList
          data={placesToDisplay}
          onItemClick={(id) => setRef(id, setData, SET_PLACES_TO_DISPLAY)}
          onHiddenItemClick={(id) => removePlace(id)}
        />
        <View style={styles.buttonsContainerStyle}>
          <DefaultButton
            buttonText="Go back"
            isClickable={refLevel > 0 ? true : false}
            onClick={() => setRef(null, setData, SET_PLACES_TO_DISPLAY)}
          />
          <DefaultButton
            buttonText="Add area"
            isClickable
            onClick={toggleOverlay}
          />
        </View>
        <ProvideNameOverlay
          warehouseLevel="Area"
          isVisible={visible}
          toggleOverlay={toggleOverlay}
          onSubmit={name => addPlace(name)}
        />
      </SafeAreaView>
    </View>
  );
}

const mapStateToProps = ({ structure }) => {
  const { placesToDisplay, refLevel } = structure;
  return { placesToDisplay, refLevel };
}

export default connect(
  mapStateToProps,
  { addPlace, removePlace, setRef, setMainRef, setData }
)(StructureScreen);

const styles = StyleSheet.create({
  structureStyle: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 20
  },
});
