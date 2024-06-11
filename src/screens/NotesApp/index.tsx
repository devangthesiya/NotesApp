import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../Redux/store';
import {addNote} from '../../Redux/notesSlice';
import {Button} from '../../Components';
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <TextInput
          value={noteText}
          onChangeText={setNoteText}
          placeholderTextColor={'rgba(28, 39, 76, 0.7)'}
          placeholder="Enter a note"
          style={{
            borderWidth: 1,
            borderColor: '#1C274C',
            borderRadius: 8,
            padding: 10,
            height: '50%',
            marginBottom: 10,
            color: '#1C274C',
            fontWeight: '400',
            fontSize: 20,
          }}
          multiline={true}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Button title={'Add Note'} onClick={handleAddNote} />
        </View>
      </View>
    </View>
  );
};

export default NotesApp;
