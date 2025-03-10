import {View, Text, FlatList, Pressable} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../Redux/store';
import {useNavigation} from '@react-navigation/native';
import NoResult from '../../assets/icons/NoResult.svg';
import moment from 'moment';

const DetailsScreen = () => {
  const navigation = useNavigation<any>();
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
      {notes.length > 0 ? (
        <FlatList
          data={notes}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => (
            <>
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
                  borderRadius: 8,
                  justifyContent: 'space-between',
                },
              ]}
              onPress={() => {
                handleClick(item);
              }}>
              <View>
                <Text numberOfLines={5} style={{color: '#1C274C', fontFamily: 'Jersey15-Regular',}}>{item.text}</Text>
              </View>
              <View style={{alignSelf: 'flex-end'}}>
                <Text  style={{color: '#1C274C', fontFamily: 'Jersey15-Regular',}}>
                  {moment(parseInt(item.id)).format("Do MMM, YYYY")}
                </Text>
              </View>
            </Pressable>
            </>
          )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <NoResult width={200} height={200} />
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: '#1C274C',
                fontSize: 20,
                fontFamily: 'Jersey15-Regular',
                marginBottom: 10,
                textAlign: 'center',
              }}>
              Nothing here
            </Text>
            <Text
              style={{
                color: '#1C274C',
                opacity: 0.8,
                fontSize: 12,
                fontFamily: 'Jersey15-Regular',
                textAlign: 'center',
                width: 200,
              }}>
              Add notes to see them here in details page
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default DetailsScreen;
