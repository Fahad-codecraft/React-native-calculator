import React, { useState } from "react";
import { View, Text } from "react-native";
import Button from "./Button";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyKeyboard() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const handleButtonPress = (buttonValue) => {
    setExpression((prevExpression) => prevExpression + buttonValue);
  };

  const clear = () => {
    setExpression("");
    setResult(null);
  };

  const getResult = () => {
    try {
      const evalResult = eval(expression); // Using eval to evaluate the expression
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <View style={Styles.viewBottom}>
      <View
        style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}
      >
        <Text style={Styles.screenSecondNumber}>{expression}</Text>
        {result !== null && (
          <Text
            style={
              result < 99999
                ? [Styles.screenFirstNumber, { color: myColors.result }]
                : [Styles.screenFirstNumber, { fontSize: 50, color: myColors.result }]
            }
          >
            {result.toString()}
          </Text>
        )}
      </View>
      <View style={Styles.row}>
        <Button title="C" isGray onPress={clear} />
        <Button title="(" isGray onPress={() => handleButtonPress("(")} />
        <Button title=")" isGray onPress={() => handleButtonPress(")")} />
        <Button title="÷" isBlue onPress={() => handleButtonPress("/")} />
      </View>
      <View style={Styles.row}>
        <Button title="7" onPress={() => handleButtonPress("7")} />
        <Button title="8" onPress={() => handleButtonPress("8")} />
        <Button title="9" onPress={() => handleButtonPress("9")} />
        <Button title="×" isBlue onPress={() => handleButtonPress("*")} />
      </View>
      <View style={Styles.row}>
        <Button title="4" onPress={() => handleButtonPress("4")} />
        <Button title="5" onPress={() => handleButtonPress("5")} />
        <Button title="6" onPress={() => handleButtonPress("6")} />
        <Button title="-" isBlue onPress={() => handleButtonPress("-")} />
      </View>
      <View style={Styles.row}>
        <Button title="1" onPress={() => handleButtonPress("1")} />
        <Button title="2" onPress={() => handleButtonPress("2")} />
        <Button title="3" onPress={() => handleButtonPress("3")} />
        <Button title="+" isBlue onPress={() => handleButtonPress("+")} />
      </View>
      <View style={Styles.row}>
        <Button title="." onPress={() => handleButtonPress(".")} />
        <Button title="0" onPress={() => handleButtonPress("0")} />
        <Button title="⌫" onPress={() => setExpression(expression.slice(0, -1))} />
        {/* <Button title="⌫" onPress={() => handleButtonPress("⌫")} /> */}
        <Button title="=" isBlue onPress={() => getResult()} />
      </View>
    </View>
  );
}
