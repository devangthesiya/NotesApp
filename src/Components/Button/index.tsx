import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

interface ButtonProp {
  title: string;
  onClick(): void;
}
const Button = ({title, onClick}: ButtonProp) => {
  return (
    <Pressable
      style={({pressed}) => [
        {
          opacity: pressed ? 0.5 : 1.0,
          ...styles.container,
          borderColor:
            title == 'Update'
              ? '#34488c'
              : title == 'Delete'
              ? '#e83333'
              : '#1C274C',
        },
      ]}
      onPress={onClick}>
      <Text
        style={{
          color:
            title == 'Update'
              ? '#34488c'
              : title == 'Delete'
              ? '#e83333'
              : '#1C274C',
        }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 120,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
