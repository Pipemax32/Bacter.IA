import React, { Component } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import "aws-sdk";

class Photo extends Component {
  async _main() {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images",
        cameraRoll: true,
        waitUntilSaved: true,
      },
    };

    ImagePicker.showImagePicker(options, async (imageObject) => {
      // Checking for errors
      if (imageObject.didCancel) {
        console.log("User cancelled image picker");
      } else if (imageObject.error) {
        console.log("ImagePicker Error: ", imageObject.error);
      } else if (imageObject.customButton) {
        console.log("User tapped custom button: ", imageObject.customButton);
      } else {
        // Checking the platform and change the uri if needed
        if (Platform.OS !== "android") {
          if (imageObject && imageObject.uri) {
            imageObject.uri.replace("file://", "");
          }
        }
        const source = { uri: imageObject.uri };
        this.setState({ image: source }); // use this as source in Image component
        const data = {
          fileName: imageObject.fileName,
          fileType: imageObject.type,
          type: "profileImage",
        };
        // Sending the key image information to server to generate a signed URL using axios
        const res = await CommonAPI.getSignedURL(data);
      }
    });
    /*
        exports.store = async (req, res) => {
            // Extract information from the body
                const {type, fileName, fileType} = req.body;
                let bucket = "";
                let key = "";
            // Select bucket and key values accrording to the type of image 
                switch (type){
                    case "profileImage":
                        bucket = "bacteria-photos";
                        key="input";
                        break;
                    // case "";
                }
            // Check that we have valid and non-empty bucket and key values
                if(bucket && key){
                     const s3Params = {
                          Bucket: bucket,
                          Key: key + "/" + fileName,
                          Expires: 600,
                          ContentType: fileType,
                          ACL: "public-read"
                     }
            AWS.S3().getSignedUrl("putObject", s3Params, function(err, data){
                          res.send({
                               data: {
                                     signedRequest: data,
                                     url: `https://s3-us-east-1.amazonaws.com/${bucket}/${key}/${fileName}`
                                }
                            });
                        })
                }else{
                     // Sending the error response
                     res.send({data:{}, status: "ERROR", message:"Invalid image type"});
                }
            }
        // Creating a new Request
        const xhr = new XMLHttpRequest();
        // Adding a listener to track the progress
        xhr.upload.addEventListener('progress', (event) => {
            if (event.lengthComputable) {
                let percentComplete = event.loaded / event.total;
                this.setState({progress: percentComplete});
            } else {}
        }).catch(err=>err);
        // Adding a listener to check the status of the request
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('Image successfully uploaded to S3');
                    this.setState({imageURL: signedURL});
                } else {
                    console.log('Error while sending the image to S3')
                }
            }
        }.catch(err=>err)
        */
  }

  render() {
    return (
      <View>
        <Button
          onPress={this._main}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

export default Photo;
