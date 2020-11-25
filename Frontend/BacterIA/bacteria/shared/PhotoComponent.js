import React, { useState, useContext } from 'react'
import { Text, View, Image, Button, Alert } from 'react-native'
import { globalStyles } from "../styles/global";
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import { MaterialIcons } from "@expo/vector-icons";
import { dataContext } from "../screens/provider/dataProvider";

export default function PhotoComponent() {
	const [b64_img, setB64_img] = useState("")


	const data = useContext(dataContext);

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
					let densidad = json.density // Int
					let cantidad = json.colony_count // Int
					let imgNoEdit = json.b64img // Str
					let imgEdit = json.b64_cimg // Str
					let nuevoCultivo = [densidad, cantidad, imgEdit, imgNoEdit, data.key]
					data.addCultivo(nuevoCultivo)
					data.keyCountUp
					setB64_img(imgEdit) // Testing
					//console.log(b64_img)

				})

			}
		}
	}

	return (

		<View>
			<View style={globalStyles.button}>
				<MaterialIcons
					name="camera-alt"
					size={48}
					style={{
						...globalStyles.modalToggle,
					}}
					onPress={takeImage} />
				<Button title="Take a photo" onPress={takeImage} />

			</View>
			<Image style={{ height: 100, width: 100 }} source={{ uri: `data:image/gif;base64,${b64_img}` }} />
		</View>
	)
}