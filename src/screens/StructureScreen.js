import React, { useEffect, useState } from 'react';
import { navigate, push } from '../navigation/RootNavigation';
import { SafeAreaView, FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import mainStyle from '../styles/style';
import DefaultButton from '../components/DefaultButton';
import ProvideNameOverlay from '../components/ProvideNameOverlay';
import { connect } from 'react-redux';
import { getPlaces, addPlace } from '../redux/actions/structureActions';

const StructureScreen = ({ route, places, getPlaces, addPlace }) => {
  const [visible, setVisible] = useState(false);

  const { items } = route.params;
  console.log(items);
  const toggleOverlay = () => {
    setVisible(!visible);
  }

  useEffect(() => {
    getPlaces();
  }, []);

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        <FlatList
          data={places}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => { navigate('Structure', { items: item.places }) }}
              >
                <ListItem
                  bottomDivider
                  containerStyle={styles.listStyle}
                >
                  <ListItem.Content>
                    <ListItem.Title style={styles.listItemStyle}>{item._id}</ListItem.Title>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.buttonStyle}>
          <DefaultButton
            buttonText="Add area"
            onClick={toggleOverlay}
          />
        </View>
        <ProvideNameOverlay
          warehouseLevel="Area"
          isVisible={visible}
          toggleOverlay={toggleOverlay}
          onSubmit={name => {
            if (name && name !== "") {
              addPlace(name);
            }
          }}
        />
      </SafeAreaView>
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
    flex: 1,
    alignSelf: 'stretch'
  },
  listStyle: {
    backgroundColor: mainStyle.viewStyle.backgroundColor
  },
  buttonStyle: {
    alignSelf: 'center',
    paddingBottom: 20
  },
  listItemStyle: {
    color: 'white',
    fontSize: 20
  }
});
