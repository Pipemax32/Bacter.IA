import { StyleSheet } from "react-native";

//this.state = {
//_hred: "#cc0000",
//};

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#097154",
    marginVertical: 4,
  },
  titleMiddle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#097154",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },
  tabText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraph: {
    marginVertical: 4,
    lineHeight: 20,
    color: "#097154",
  },
  //PARA QUE NO SE BUGGEE EL TEXTO DEL CULTIVO
  blankLine: {
    lineHeight: 5,
  },
  paragraphTitle: {
    marginVertical: 4,
    lineHeight: 20,
    color: "#097154",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EDEDED",
    //alignItems: "center",
    //justifyContent: "center",
  },
  button: {
    marginTop: 20,
    marginHorizontal: 22,
    padding: 10,

    //backgroundColor: _hred,
    backgroundColor: "#3AB795",
    alignItems: "center",
    borderRadius: 100,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#007557",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    //justifyContent: "center",
  },
  buttonAlt: {
    marginTop: 20,
    marginHorizontal: 22,
    padding: 10,

    //backgroundColor: _hred,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 100,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#007557",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    //justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonTextAlt: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3AB795",
    color: "#b9b9bf",
  },
  scrollView: {
    padding: 10,
    height: 215,
    //alignItems: "center",
    //justifyContent: "center",
  },
  optionspart: {
    padding: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  modalContent: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EdEdEd",
    //alignItems: "center",
    //justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ededed",
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    fontSize: 18,
    backgroundColor: "#ededed",
  },
  modalToggle: {
    marginHorizontal: 20,
    marginBottom: 10,
    color: "#007557",
    alignSelf: "center",
    padding: 10,
  },
  cultivoButtons: {
    //marginHorizontal: 20,
    //marginBottom: 10,
    color: "#007557",
    alignSelf: "center",
    padding: 3,
  },
  modalClose: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#007557",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 2,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  header: {
    //backgroundColor: _hred,
    backgroundColor: "#3AB795",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
