import {View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../Redux/store';
import {addNote} from '../../Redux/notesSlice';
const NotesApp = () => {
  const [noteText, setNoteText] = useState('');
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
            fontSize: 20,
          }}
          multiline={true}
        />

        <Button title="Add Note" onPress={handleAddNote} />
      </View>
    </View>
  );
};

export default NotesApp;
