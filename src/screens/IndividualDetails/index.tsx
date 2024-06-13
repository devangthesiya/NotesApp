import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppDispatch} from '../../Redux/store';
import {deleteNote, updateNote} from '../../Redux/notesSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, HorizontalLine} from '../../Components';
import Modal from 'react-native-modal';

const IndividualDetail = ({route}: any) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [note, setNote] = useState(item);
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
    navigation.goBack();
  };

  const handleUpdateNote = (id: string, text: string) => {
    console.log('update clicked');
    // toggleModal();

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
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 8,
          borderColor: '#1C274C',
        }}>
        <Text style={{textAlign: 'left', color: '#1C274C', lineHeight: 20}}>
          {note.text}
        </Text>
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
      <View style={{flex: 1}}>
        <Modal
          isVisible={isModalVisible}
          testID={'modal'}
          onBackdropPress={toggleModal}
          backdropOpacity={0.7}
          animationIn="zoomInDown"
          animationOut="zoomOutUp"
          animationInTiming={600}
          animationOutTiming={600}
          backdropTransitionInTiming={600}
          backdropTransitionOutTiming={600}>
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button onClick={toggleModal} title="Close" />
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default IndividualDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
