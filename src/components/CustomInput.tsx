import React from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  InputModeOptions,
  Platform,
} from 'react-native';

interface CustomInputProps {
  label: string;
  value: string;
  placeHolder?: string;
  inputMode?: InputModeOptions;
  onChangeText: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  value,
  placeHolder,
  inputMode,
  onChangeText,
}) => {
  return (
    <View style={[styles.container, styles.input]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeHolder}
        style={styles.inputSpacing}
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {color: 'grey'},
  input: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  inputSpacing: {
    ...Platform.select({
      ios: {
        marginTop: 6,
      },
      android: {
        marginTop: -12,
        paddingStart: -2,
        marginBottom: -10,
      },
    }),
  },
});
