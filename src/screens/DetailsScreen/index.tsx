import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = () => {
  const navigation = useNavigation();
  const notes = useSelector((state: RootState) => state.notes);

  const handleClick = (item: object) => {
    // console.log("Clicked", item);
    navigation.navigate('IDetails', {item: item});
  };
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
      }}>
      <FlatList
        data={notes}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            style={({pressed}) => [
              {
                opacity: pressed ? 0.5 : 1.0,
                flex: 1,
                //   alignItems: 'center',
                borderWidth: 1,
                marginVertical: 10,
                width: '40%',
                height: 135,
                marginHorizontal: 5,
                padding: 10,
                // backgroundColor: 'lightblue',
                borderColor: '#1C274C',
                borderRadius: 8
              },
            ]}
            onPress={() => {
              handleClick(item);
            }}>
            <View>
              <Text style={{color: '#1C274C'}}>{item.text}</Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
