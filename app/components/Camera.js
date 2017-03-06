import ImagePicker from 'react-native-image-picker';
import { Platform } from 'react-native';

// More info on all the options is below in the README...just some common use cases shown here
const options = {
    title: 'Snap your brew!',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

/**
 * The first arg will be the options object for customization, the second is
 * your callback which sends object: response.
 *
 * response.didCancel will inform you if the user cancelled the process
 * response.error will contain an error message, if there is one
 * response.data is the base64 encoded image data (photos only)
 * response.uri is the uri to the local file asset on the device (photo or video)
 * response.isVertical will be true if the image is vertically oriented
 * response.width & response.height give you the image dimensions
 */

export const pickImage = () => new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else {
            const uri = Platform.OS === 'android' ? response.uri : response.uri.replace('file://', '');
            const source = { uri, isStatic: true };
            const image = {
                source,
                data: response.data
            };
            resolve(image);
        }
    });
});