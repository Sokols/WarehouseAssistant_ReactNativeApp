import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet, Text } from 'react-native';
import mainStyle from '../styles/style';
import DefaultButton from '../components/DefaultButton';
import ProvideNameOverlay from '../components/ProvideNameOverlay';
import { connect } from 'react-redux';
import { getPlaces, addPlace } from '../redux/actions/structureActions';

const StructureScreen = ({ places, getPlaces, addPlace }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    getPlaces();
  }, []);

  const getPlaceId = item => {
    return item.area + "-" + item.row + "-" + item.shelf + "-" + item.place;
  }

  return (
    <View style={mainStyle.viewStyle}>
      <View style={styles.structureStyle}>
        <SafeAreaView style={styles.containerStyle}>
          <FlatList
            data={places}
            keyExtractor={(item) => getPlaceId(item)}
            renderItem={({ item }) => (
              <View>
                <Text style={{ fontSize: 18, color: 'white' }}>{getPlaceId(item)}</Text>
              </View>
            )}
          />
        </SafeAreaView>
        <DefaultButton
          buttonText="Add area"
          onClick={addPlace}
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
  { getPlaces, addPlace }
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
