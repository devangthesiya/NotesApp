import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {AppDispatch} from '../../Redux/store';
import {deleteNote, updateNote} from '../../Redux/notesSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Button, HorizontalLine} from '../../Components';
import Modal from 'react-native-modal';
import Close from '../../assets/icons/close.svg';

const IndividualDetail = ({route}: any) => {
  const {item} = route.params;
  const navigation = useNavigation();
  const [note, setNote] = useState(item);
  const [isModalVisible, setModalVisible] = useState(false);
  const [text, onChangeText] = React.useState(item.text);
  const dispatch: AppDispatch = useDispatch();
  const handleDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
    navigation.goBack();
  };

  const handleUpdateNote = (id: string, text: string) => {
    console.log('update clicked');
    text = text.trim();
    dispatch(
      updateNote({
        id,
        text,
      }),
    );
    setNote(() => {
      return {text: text, id: id};
    });
    toggleModal();
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white', padding: 20}}
      alwaysBounceVertical={false}>
      <View>
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
          <Button title={'Update'} onClick={toggleModal} />
          <Button
            title={'Delete'}
            onClick={() => {
              handleDeleteNote(note.id);
            }}
          />
        </View>
        <View>
          <Modal
            isVisible={isModalVisible}
            testID={'modal'}
            onBackdropPress={toggleModal}
            backdropOpacity={0.8}
            animationInTiming={300}
            animationOutTiming={300}>
            <View style={styles.content}>
              <View
                style={{marginLeft: 'auto', marginTop: -10, marginBottom: 5}}>
                <Pressable
                  style={({pressed}) => [
                    {
                      opacity: pressed ? 0.5 : 1.0,
                    },
                  ]}
                  onPress={toggleModal}>
                  <Close width={30} height={30} />
                </Pressable>
              </View>
              <View
                style={{
                  height: 50,
                  borderWidth: 1,
                  width: '100%',
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginBottom: 10,
                  borderRadius: 8,
                  borderColor: '#1C274C',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <TextInput
                  value={text}
                  onChangeText={onChangeText}
                  multiline={true}
                  style={{
                    color: '#1C274C',
                    lineHeight: 20,
                    justifyContent: 'center',
                    paddingVertical: 0,
                  }}
                />
              </View>
              <Button
                onClick={() => {
                  handleUpdateNote(note.id, text);
                }}
                title="Update"
              />
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
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
