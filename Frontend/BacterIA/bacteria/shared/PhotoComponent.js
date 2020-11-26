import React, { useState, useContext } from 'react'
import { Text, View, Image, Button, Alert, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { globalStyles } from "../styles/global";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { MaterialIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import Card from "./card";
import { dataContext } from "../screens/provider/dataProvider";

export default function PhotoComponent({ setCultivoformOpen }) {


	//const [nuevoCultivo, setNuevoCultivo] = useState([])

	const [name, setName] = useState("")
	const [notes, setNotes] = useState("")
	const [dens, setDens] = useState(0)
	const [colCount, setColCount] = useState(0)
	const [cimgNoEdit, setCimgNoEdit] = useState("")
	const [cimgEdit, setCimgEdit] = useState("")

	const [photoUp, setPhotoUp] = useState(false)

	const data = useContext(dataContext);


	//const submit = () => {

	//};


	const askForPermission = async () => {
		const permissionResult = await Permissions.askAsync(Permissions.CAMERA)
		if (permissionResult.status !== 'granted') {
			Alert.alert('no permissions to access camera!', [{ text: 'ok' }])
			return false
		}
		return true
	}

	takeImage = async () => {
		// make sure that we have the permission
		const hasPermission = await askForPermission()
		if (!hasPermission) {
			return
		} else {
			// launch the camera with the following settings
			let image = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [3, 3],
				quality: 0.8,
				base64: true,
			})
			// make sure a image was taken:
			if (!image.cancelled) {
				fetch('http://24.232.185.128:25565/getImageData', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json',
					},
					// send our base64 string as POST request
					body: JSON.stringify({
						b64_img: image.base64,
					}),
				}).then(response => response.json()).then(json => {
					setDens(json.density) // Int
					setColCount(json.colony_count) // Int
					setCimgNoEdit(json.b64img) // Str
					setCimgEdit(json.b64_cimg) // Str

					setPhotoUp(true)
					//data.keyCountUp

					//console.log(b64_img)

				})

			}
		}
	}

	return (

		<View style={globalStyles.container}>{photoUp == false ?
			<View style={{ height: 150 }}></View> : null}
			{photoUp == false ?
				<Text style={globalStyles.titleMiddle}>Seleccioná la foto de tu cultivo desde tu Galería</Text> : null}
			{photoUp == false ?
				<View style={{ height: 25 }}></View> : null}
			{photoUp == false ?
				<MaterialIcons
					name="camera-alt"
					size={48}
					style={{
						...globalStyles.modalToggle,
					}}
					onPress={takeImage} /> : null}


			{photoUp == true ? <Formik
				initialValues={{
					titulo2: "",
					notas2: "",
				}}
				onSubmit={() => {


					data.addCultivo(nuevoCultivo)
					setCultivoformOpen(false)

					Keyboard.dismiss;
				}}
			>
				{(props) => (
					<View>
						<Card>
							<TextInput
								maxLength={25}
								style={globalStyles.input}
								placeholder="Título"
								onChangeText={props.handleChange("titulo2")}
								value={props.values.titulo2}
							/>
							<TextInput
								multiline
								textAlignVertical="top"
								maxLength={120}
								maxHeight={120}
								style={globalStyles.input}
								placeholder="Notas"
								onChangeText={props.handleChange("notas2")}
								value={props.values.notas2}
							/>

							<View style={{ height: 20 }}>

							</View>
							<View style={{ alignItems: "center" }}>
								<Image style={{ height: 200, width: 200 }} source={{ uri: `data:image/gif;base64,${cimgEdit}` }} />
							</View>
						</Card>

						<TouchableOpacity
							style={globalStyles.button}
							onPress={() => {



								//setProfileOpen(false);
								if (props.values.titulo2 == "" || props.values.titulo2 == " ") {
									props.values.titulo2 = "Sin nombre";
								}
								if (props.values.notas2 == "" || props.values.notas2 == " ") {
									props.values.notas2 = "Sin comentarios";
								}


								console.log("Hola mi valor es " + notes)
								console.log("Hola mi valor es " + name)
								//setNotes(props.values.notas2.value);


								console.log("colCount" + { colCount })

								data.addCultivo({
									cantidad: colCount,
									fecha: "26-11-2020",
									titulo: props.values.titulo2,
									notas: props.values.notas2,
									densidad: dens,
									imgEdit: cimgEdit,
									imgNoEdit: cimgNoEdit
								})

								setCultivoformOpen(false)

								Keyboard.dismiss;
								//submit()
							}}>
							<Text style={globalStyles.buttonText}>Nuevo Cultivo</Text>
						</TouchableOpacity>

					</View>
				)}
			</Formik> : null}

			{/*photoUp == true ? <View>
				<Card>
					<TextInput
						maxLength={25}
						style={globalStyles.input}
						onChangeText={text => setName(text)}
						value={name}
					/>
					<TextInput
						multiline
						textAlignVertical="top"
						maxLength={120}
						maxHeight={100}
						style={globalStyles.input}
						onChangeText={text => setNotes(text)}
						value={notes}
					/>
					<View style={{ height: 20 }}>

					</View>
					<View style={{ alignItems: "center" }}>
						<Image style={{ height: 200, width: 200 }} source={{ uri: `data:image/gif;base64,${cimgEdit}` }} />
					</View>
				</Card>



			</View> : null*/}



			{/*photoUp == true ? <Formik
				initialValues={{
					titulo2: "",
					notas2: "",
				}}
				onSubmit={() => {


					data.addCultivo(nuevoCultivo)
					setCultivoformOpen(false)

					Keyboard.dismiss;
				}}
			>
				{(props) => (
					<View>
						<Card>
							<TextInput
								maxLength={16}
								style={globalStyles.input}
								placeholder="Título"
								onChangeText={props.handleChange("titulo2")}
								value={props.values.titulo2}
							/>
							<TextInput
								multiline
								textAlignVertical="top"
								maxLength={120}
								maxHeight={120}
								style={globalStyles.input}
								placeholder="Notas"
								onChangeText={props.handleChange("notas2")}
								value={props.values.notas2}
							/>
						</Card>
						<TouchableOpacity
					style={globalStyles.button}
					onPress={() => {



						//setProfileOpen(false);
								if (props.values.titulo2 == "") {
									props.values.titulo2 = "Sin nombre";
								}
								if (props.values.notas2 == "") {
									props.values.notas2 = " ";
								}

						console.log("Hola mi valor es " + notes)
						console.log("Hola mi valor es " + name)
						//setNotes(props.values.notas2.value);


						console.log("colCount" + { colCount })





						data.addCultivo({
							cantidad: colCount,
							fecha: "26-11-2020",
							titulo: name,
							notas: notes,
							densidad: dens,
							imgEdit: cimgEdit,
							imgNoEdit: cimgNoEdit
						})

						setCultivoformOpen(false)

						Keyboard.dismiss;
						//submit()
					}}>
					<Text style={globalStyles.buttonText}>Nuevo Cultivo</Text>
				</TouchableOpacity>
						
					</View>
				)}
			</Formik> : null*/}
		</View>
	)
}