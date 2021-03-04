import React, { useState } from 'react';

import { SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import mainStyle from '../styles/style';
import { MAIN_COLOR } from '../styles/colors';

import DefaultButton from '../components/DefaultButton';
import ProvideNameOverlay from '../components/ProvideNameOverlay';

import { connect } from 'react-redux';
import { addPlace, setRef, setData, setMainRef } from '../redux/actions/structureActions';
import { SET_PLACES_TO_DISPLAY } from '../redux/actions/types';

const StructureScreen = ({ placesToDisplay, refLevel, addPlace, setRef, setData }) => {
  const [visible, setVisible] = useState(false);
  
  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        <FlatList
          data={placesToDisplay}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => setRef(item.id, setData, SET_PLACES_TO_DISPLAY)}
              >
                <ListItem
                  bottomDivider
                  containerStyle={styles.listStyle}
                >
                  <ListItem.Content>
                    <ListItem.Title style={styles.listItemStyle}>{item.id}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron size={24} />
                </ListItem>
              </TouchableOpacity>
            </View>
          )}
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
  { addPlace, setRef, setMainRef, setData }
)(StructureScreen);

const styles = StyleSheet.create({
  structureStyle: {
    flex: 1,
    alignSelf: 'stretch'
  },
  listStyle: {
    backgroundColor: MAIN_COLOR
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: 20
  },
  listItemStyle: {
    color: 'white',
    fontSize: 20
  }
});
