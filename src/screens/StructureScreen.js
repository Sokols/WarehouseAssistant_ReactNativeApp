import React, { useState } from 'react';

import { Text, SafeAreaView, View, StyleSheet } from 'react-native';

import mainStyle from '../styles/style';

import DefaultButton from '../components/DefaultButton';
import DefaultSwipeList from '../components/DefaultSwipeList';
import ProvidePlaceOverlay from '../components/ProvidePlaceOverlay';

import { connect } from 'react-redux';
import { addPlace, removePlace, setRef, setData, setMainRef } from '../redux/actions/structureActions';
import { SET_PLACES_TO_DISPLAY } from '../redux/actions/types';

import DefaultPlaceListItem from '../components/DefaultPlaceListItem';
import EmptyInfoText from '../components/EmptyInfoText';

const StructureScreen = ({ placesToDisplay, refLevel, addPlace, removePlace, setRef, setData }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        {
          placesToDisplay.length > 0
            ? <DefaultSwipeList
              data={placesToDisplay}
              onItemClick={(id) => setRef(id, setData, SET_PLACES_TO_DISPLAY)}
              onHiddenItemClick={(id) => removePlace(id)}
              listItem={(item) => (<DefaultPlaceListItem item={item} />)}
            />
            : <EmptyInfoText
              text={'There is nothing here.\nAdd new warehouse level!'}
            />
        }

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
    margin: 25,
    justifyContent: 'space-around'
  },
});
