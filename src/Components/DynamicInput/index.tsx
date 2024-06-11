import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

interface DynamicTextInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const DynamicTextInput: React.FC<DynamicTextInputProps> = ({ value, onChangeText, ...props }) => {
  const [height, setHeight] = useState(40);

  return (
    <TextInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      multiline
      style={[styles.input, { height: Math.max(60, height) }]}
      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
  },
});

export default DynamicTextInput;
