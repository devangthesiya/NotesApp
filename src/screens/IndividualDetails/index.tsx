import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppDispatch} from '../../Redux/store';
import {deleteNote, updateNote} from '../../Redux/notesSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, HorizontalLine} from '../../Components';

const IndividualDetail = ({route}: any) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [note, setNote] = useState(item);

  //   console.log('data in detailsss: ', item);
  const dispatch: AppDispatch = useDispatch();
  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
    navigation.goBack();
  };

  const handleUpdateNote = (id: string, text: string) => {
    dispatch(
      updateNote({
        id,
        text,
      }),
    );
    setNote(() => {
      return {text: text, id: id};
    });
  };

  useEffect(() => {}, [note]);

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          borderColor: '#1C274C',
        }}>
        <Text style={{textAlign: 'left', color: '#1C274C', lineHeight: 20}}>{note.text}</Text>
      </View>
      <HorizontalLine />
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button
          title={'Update'}
          onClick={() => {
            handleUpdateNote(note.id, 'Updated Text');
          }}
        />
        <Button
          title={'Delete'}
          onClick={() => {
            handleDeleteNote(note.id);
          }}
        />
      </View>
    </View>
  );
};

export default IndividualDetail;
