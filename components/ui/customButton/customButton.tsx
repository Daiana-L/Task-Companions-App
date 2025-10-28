import { Text, Pressable } from "react-native";
import React from "react";

interface Props {
  children: string;
}

const CustomButton = ({ children }: Props) => {
  return (
    <Pressable
    style={{
    width: 100,
  }} className="bg-orange-500 items-center p-4 mt-10 rounded-2xl">
      <Text className="text-white text-lg text-center font-semibold">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;