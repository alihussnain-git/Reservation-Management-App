import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
});
