import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#097154",
    marginVertical: 4,
  },
  paragraph: {
    marginVertical: 4,
    lineHeight: 20,
    color: "#097154",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5E5E5",
    //alignItems: "center",
    //justifyContent: "center",
  },
  optionspart: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5E5E5",
    //alignItems: "center",
    //justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    fontSize: 18,
  },
  modalToggle: {
    marginHorizontal: 20,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  modalClose: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  header: {
    backgroundColor: "#3AB795",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
