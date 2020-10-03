import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  textInputStyle: TextStyle;
  buttonImageStyle: ImageStyle;
}

export const _container = (
  horizontal: boolean,
  backgroundColor: string,
): ViewStyle => ({
  paddingTop: horizontal ? 0 : 7,
  paddingBottom: horizontal ? 0 : 7,
  paddingLeft: horizontal ? 0 : 9,
  paddingRight: horizontal ? 0 : 9,
  flexDirection: horizontal ? "row" : "column",
  width: horizontal ? 170 : undefined,
  backgroundColor,
  borderRadius: 24,
  alignItems: "center",
  justifyContent: "space-evenly",
  shadowRadius: 5,
  shadowOpacity: 0.3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _increaseButtonStyle = (
  isPressed: boolean,
  increaseButtonBackgroundColor: string,
): ViewStyle => ({
  width: 40,
  height: 40,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isPressed ? increaseButtonBackgroundColor : "transparent",
  shadowOpacity: isPressed ? 0.1 : 0,
  shadowRadius: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export const _decreaseButtonStyle = (
  isPressed: boolean,
  decreaseButtonBackgroundColor: string,
): ViewStyle => ({
  width: 40,
  height: 40,
  borderRadius: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: isPressed ? "transparent" : decreaseButtonBackgroundColor,
  shadowOpacity: isPressed ? 0 : 0.1,
  shadowRadius: 3,
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
});

export default StyleSheet.create<Style>({
  textInputStyle: {
    width: 40,
    height: 40,
    fontSize: 24,
    marginTop: 12,
    marginBottom: 8,
    alignSelf: "center",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonImageStyle: {
    width: 15,
    height: 15,
  },
});