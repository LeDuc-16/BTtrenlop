import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import MyInput from '../components/MyInput';

export default function CalculatorPage() {
  const [numberA, setNumberA] = useState('');
  const [numberB, setNumberB] = useState('');
  const [result, setResult] = useState('0');

  const handleCalculation = (operation: string) => {
    const a = parseFloat(numberA);
    const b = parseFloat(numberB);

    if (isNaN(a) || isNaN(b)) {
      Alert.alert('Lỗi', 'Vui lòng nhập số hợp lệ');
      return;
    }

    let calculatedResult = 0;
    switch (operation) {
      case 'TỔNG':
        calculatedResult = a + b;
        break;
      case 'HIỆU':
        calculatedResult = a - b;
        break;
      case 'TÍCH':
        calculatedResult = a * b;
        break;
      case 'THƯƠNG':
        if (b === 0) {
          Alert.alert('Lỗi', 'Không thể chia cho 0');
          return;
        }
        calculatedResult = a / b;
        break;
      default:
        return;
    }

    setResult(calculatedResult.toString());
  };

  const CalculatorButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
    <TouchableOpacity
      className="bg-gray-300 px-6 py-3 rounded-lg mx-1 flex-1 items-center"
      onPress={onPress}
    >
      <Text className="text-black font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-white p-6">
      {/* Header */}
      <View className="items-center mb-8 mt-12">
        <Text className="text-4xl font-bold text-green-600">Calculator</Text>
      </View>

      {/* Input Fields */}
      <View className="mb-6">
        <MyInput
          label="Nhập a"
          placeholder="0"
          value={numberA}
          onChangeText={setNumberA}
          keyboardType="numeric"
          containerClassName="mb-4"
          labelClassName="text-gray-600 font-medium mb-2 text-lg"
          inputClassName="flex-1 text-gray-800 text-lg"
        />

        <MyInput
          label="Nhập b"
          placeholder="0"
          value={numberB}
          onChangeText={setNumberB}
          keyboardType="numeric"
          containerClassName="mb-4"
          labelClassName="text-gray-600 font-medium mb-2 text-lg"
          inputClassName="flex-1 text-gray-800 text-lg"
        />

        <MyInput
          label="Kết quả"
          placeholder="0"
          value={result}
          editable={false}
          containerClassName="mb-6"
          labelClassName="text-gray-600 font-medium mb-2 text-lg"
          inputClassName="flex-1 text-gray-800 text-lg"
        />
      </View>

      {/* Operation Buttons */}
      <View className="flex-row justify-between mb-4">
        <CalculatorButton
          title="TỔNG"
          onPress={() => handleCalculation('TỔNG')}
        />
        <CalculatorButton
          title="HIỆU"
          onPress={() => handleCalculation('HIỆU')}
        />
      </View>

      <View className="flex-row justify-between">
        <CalculatorButton
          title="TÍCH"
          onPress={() => handleCalculation('TÍCH')}
        />
        <CalculatorButton
          title="THƯƠNG"
          onPress={() => handleCalculation('THƯƠNG')}
        />
      </View>

      {/* Clear Button */}
      <TouchableOpacity
        className="bg-red-500 py-4 rounded-lg mt-8 items-center"
        onPress={() => {
          setNumberA('');
          setNumberB('');
          setResult('0');
        }}
      >
        <Text className="text-white font-bold text-lg">CLEAR</Text>
      </TouchableOpacity>
    </View>
  );
}
