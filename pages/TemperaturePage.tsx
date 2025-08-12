import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MyInput from '../components/MyInput';

export default function TemperaturePage() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  const convertToCelsius = () => {
    const f = parseFloat(fahrenheit);
    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  const convertToFahrenheit = () => {
    const c = parseFloat(celsius);
    if (!isNaN(c)) {
      const f = (c * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const clearAll = () => {
    setFahrenheit('');
    setCelsius('');
  };

  return (
    <View className="flex-1 bg-white p-6">
      {/* Header */}
      <View className="mb-8 mt-12 items-center">
        <Text className="mb-2 text-3xl font-bold text-blue-600">Temperature Converter</Text>
        <Text className="text-lg text-gray-600">Chuyển đổi nhiệt độ</Text>
      </View>

      {/* Input Fields */}
      <View className="mb-8 space-y-4">
        <MyInput
          label="Fahrenheit"
          placeholder="Nhập độ F"
          value={fahrenheit}
          onChangeText={setFahrenheit}
          keyboardType="numeric"
          containerClassName="mb-6"
          labelClassName="text-gray-700 font-semibold mb-3 text-lg"
          inputClassName="flex-1 text-gray-800 text-lg"
        />

        <MyInput
          label="Celsius"
          placeholder="Nhập độ C"
          value={celsius}
          onChangeText={setCelsius}
          keyboardType="numeric"
          containerClassName="mb-8"
          labelClassName="text-gray-700 font-semibold mb-3 text-lg"
          inputClassName="flex-1 text-gray-800 text-lg"
        />
      </View>

      {/* Conversion Buttons */}
      <View className="mb-6 flex-row justify-between">
        <TouchableOpacity
          className="mr-2 flex-1 items-center rounded-lg bg-blue-500 px-6 py-4 shadow-lg"
          onPress={convertToCelsius}>
          <Text className="text-base font-bold text-white">Convert To</Text>
          <Text className="text-base font-bold text-white">Celsius</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="ml-2 flex-1 items-center rounded-lg bg-green-500 px-6 py-4 shadow-lg"
          onPress={convertToFahrenheit}>
          <Text className="text-base font-bold text-white">Convert To</Text>
          <Text className="text-base font-bold text-white">Fahrenheit</Text>
        </TouchableOpacity>
      </View>

      {/* Clear Button */}
      <TouchableOpacity
        className="items-center rounded-lg bg-gray-500 py-4 shadow-lg"
        onPress={clearAll}>
        <Text className="text-lg font-bold text-white">Clear</Text>
      </TouchableOpacity>

      {/* Information */}
      <View className="mt-8 rounded-lg bg-gray-50 p-4">
        <Text className="text-center text-sm text-gray-600">
          💡 Công thức: °C = (°F - 32) × 5/9
        </Text>
        <Text className="mt-1 text-center text-sm text-gray-600">
          💡 Công thức: °F = (°C × 9/5) + 32
        </Text>
      </View>
    </View>
  );
}
