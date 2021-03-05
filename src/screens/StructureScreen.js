import React, { useState } from 'react';

import { SafeAreaView, View, StyleSheet } from 'react-native';

import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import DefaultSwipeList from '../components/DefaultSwipeList';
import ProvidePlaceOverlay from '../components/ProvidePlaceOverlay';

import { connect } from 'react-redux';
import { addPlace, removePlace, setRef, setData, setMainRef } from '../redux/actions/structureActions';
import { SET_PLACES_TO_DISPLAY } from '../redux/actions/types';
import DefaultPlaceListItem from '../components/DefaultPlaceListItem';

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
          listItem={(item) => (<DefaultPlaceListItem item={item} />)}
        />
        <View style={styles.buttonsContainerStyle}>
          <DefaultButton
            buttonText="RETURN"
            isClickable={refLevel > 0 ? true : false}
            onClick={() => setRef(null, setData, SET_PLACES_TO_DISPLAY)}
          />
          <DefaultButton
            buttonText="ADD A PLACE"
            isClickable
            onClick={toggleOverlay}
          />
        </View>
        <ProvidePlaceOverlay
          isVisible={visible}
          toggleOverlay={toggleOverlay}
          onSubmit={data => addPlace(data)}
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
