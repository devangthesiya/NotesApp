import {View, Text, Button, FlatList, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, AppDispatch} from '../../Redux/store';
import {addNote, deleteNote, updateNote} from '../../Redux/notesSlice';
import { DynamicTextInput } from '../../Components';
const NotesApp = () => {
  const [noteText, setNoteText] = useState('');
  const notes = useSelector((state: RootState) => state.notes);
  const dispatch: AppDispatch = useDispatch();
  const handleAddNote = () => {
    dispatch(
      addNote({
        id: Date.now().toString(),
        text: noteText,
      }),
    );
    setNoteText('');
  };

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
    <View style={{}}>
      <View style={{padding: 20}}>
        <TextInput
          value={noteText}
          onChangeText={setNoteText}
          placeholder="Enter a note"
          style={{
            borderWidth: 1.5,
            borderColor: '#55AD9B',
            borderRadius: 8,
            padding: 10,
            height: '50%',
            marginBottom: 10,
            color: '#55AD9B',
            fontWeight: '500',
            fontSize: 20
          }}
         multiline={true}
         
        />

        <Button title="Add Note" onPress={handleAddNote} />
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
              <Button
                title="Delete"
                onPress={() => handleDeleteNote(item.id)}
              />
              <Button
                title="Update"
                onPress={() => handleUpdateNote(item.id, 'Updated Text')}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default NotesApp;
