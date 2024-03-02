import React from "react";
import * as FileSystem from 'expo-file-system';

import uuid from "uuid";
// import firebase from "./Firebase";


export const submitToGoogle = async (image) => {
    try {
      const base64 = await FileSystem.readAsStringAsync(image, { encoding: 'base64' });
      let body = JSON.stringify({
        requests: [
          {
            features: [
              { type: "LABEL_DETECTION", maxResults: 2 },
              { type: "TEXT_DETECTION", maxResults: 2 },
              { type: "IMAGE_PROPERTIES", maxResults: 2 },
              {
                maxResults: 2,
                model: "builtin/latest",
                type: "OBJECT_LOCALIZATION"
              }
            ],
            image: {
                content: base64,
            }
          }
        ]
      });
      let response = await fetch(
        "https://vision.googleapis.com/v1/images:annotate?key=" +
        'AIzaSyDEO1IL3do4vXJ7Z5LWlMZSZ6YEvtAgv6U',
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: body
        }
      );
      let responseJson = await response.json();
      console.log(responseJson);
      return responseJson;
    } catch (error) {
      console.log(error);
    }
  };

//   export async function uploadImageAsync(uri) {
//     const blob = await new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.onload = function() {
//         resolve(xhr.response);
//       };
//       xhr.onerror = function(e) {
//         console.log(e);
//         reject(new TypeError("Network request failed"));
//       };
//       xhr.responseType = "blob";
//       xhr.open("GET", uri, true);
//       xhr.send(null);
//     });
  
//     const ref = firebase
//       .storage()
//       .ref()
//       .child(uuid.v4());
//     const snapshot = await ref.put(blob);
  
//     // We're done with the blob, close and release it
//     blob.close();
  
//     return await snapshot.ref.getDownloadURL();
//   }
