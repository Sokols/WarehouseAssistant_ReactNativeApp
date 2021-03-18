import React from 'react';

import { ScrollView, SafeAreaView, View, StyleSheet } from 'react-native';
import { Text, Divider } from 'react-native-elements';

import mainStyle from '../styles/style';
import { LIGHT_COLOR } from '../styles/colors';

import DefaultButton from '../components/DefaultButton';
import DefaultStructureList from '../components/DefaultStructureList';
import DefaultPlaceListItem from '../components/DefaultPlaceListItem';
import EmptyInfoText from '../components/EmptyInfoText';

import { connect } from 'react-redux';
import { addPlace, removePlace, setRef, setPlaces } from '../redux/actions/structureActions';
import DefaultDivider from '../components/DefaultDivider';

const StructureScreen = ({ placesToDisplay, refLevel, addPlace, removePlace, setRef, setPlaces }) => {

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        <Text h3 style={styles.levelTitleStyle}>{refLevel + 1}. Level:</Text>
        <Text style={styles.levelSubtitleStyle}>Number of places: {placesToDisplay.length}</Text>
        <DefaultDivider />
        {
          placesToDisplay.length > 0
            ? <DefaultStructureList
              data={placesToDisplay}
              onItemClick={(id) => setRef(id, setPlaces)}
              onHiddenItemClick={(id) => removePlace(id)}
              listItem={(item) => (<DefaultPlaceListItem item={item} />)}
            />
            : <EmptyInfoText
              text={'There is nothing here.\nAdd new warehouse level!'}
            />
        }
        <DefaultDivider />
        <View style={styles.buttonsContainerStyle}>
          <ScrollView horizontal >
            <DefaultButton
              buttonText="RETURN"
              isClickable={refLevel > 0 ? true : false}
              onClick={() => setRef(null, setPlaces)}
            />
            <DefaultButton
              buttonText="ADD PLACE"
              isClickable
              onClick={() => addPlace(placesToDisplay.length)}
            />
            <DefaultButton
              buttonText="REMOVE PLACE"
              isClickable
              onClick={() => removePlace(placesToDisplay.length)}
            />
          </ScrollView>
        </View>
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
  { addPlace, removePlace, setRef, setPlaces }
)(StructureScreen);

const styles = StyleSheet.create({
  structureStyle: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonsContainerStyle: {
    flexDirection: 'row',
    margin: 15,
  },
  levelTitleStyle: {
    padding: 10,
    alignSelf: 'center',
    color: 'white',
  },
  levelSubtitleStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 10,
    color: 'white',
  }
});
