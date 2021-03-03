import React, { useEffect, useState } from 'react';

import { navigate } from '../navigation/RootNavigation';
import { SafeAreaView, FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';

import mainStyle from '../styles/style';
import { MAIN_COLOR } from '../styles/colors';

import DefaultButton from '../components/DefaultButton';
import ProvideNameOverlay from '../components/ProvideNameOverlay';

import { connect } from 'react-redux';
import { addPlace } from '../redux/actions/structureActions';

const StructureScreen = ({ places, addPlace }) => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  }

  return (
    <View style={mainStyle.viewStyle}>
      <SafeAreaView style={styles.structureStyle}>
        <FlatList
          data={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                onPress={() => { navigate('Structure') }}
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
  { addPlace }
)(StructureScreen);

const styles = StyleSheet.create({
  structureStyle: {
    flex: 1,
    alignSelf: 'stretch'
  },
  listStyle: {
    backgroundColor: MAIN_COLOR
  },
  buttonStyle: {
    alignSelf: 'center',
    paddingVertical: 20
  },
  listItemStyle: {
    color: 'white',
    fontSize: 20
  }
});
