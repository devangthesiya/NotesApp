import {View, Text, FlatList, Button} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteNote, updateNote} from '../../Redux/notesSlice';
import {RootState, AppDispatch} from '../../Redux/store';

const DetailsScreen = () => {
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch: AppDispatch = useDispatch();

  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  const handleUpdateNote = (id: string, text: string) => {
    dispatch(
      updateNote({
        id,
        text,
      }),
    );
  };
  return (
    <View style={{flex: 1, padding: 20}}>
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderWidth: 1,
              marginVertical: 5,
              padding: 3,
              backgroundColor: '',
            }}>
            <Text style={{width: '40%'}}>{item.text}</Text>
            <Button title="Delete" onPress={() => handleDeleteNote(item.id)} />
            <Button
              title="Update"
              onPress={() => handleUpdateNote(item.id, 'Updated Text')}
            />
          </View>
        )}
      />
    </View>
  );
};

export default DetailsScreen;
