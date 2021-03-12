import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { ITEMS_COLLECTION } from './constants';

export const getPhotoUrl = async (fileName) => {
    const url = await getRef(fileName).getDownloadURL();
    console.log(url);
    return url;
};

export const addPhoto = async (fileUri, fileName) => {
    await getRef(fileName).putFile(fileUri);
};

export const removePhoto = async (fileName) => {
    await getRef(fileName).delete();
};

const getRef = (fileName) => {
    const { email } = auth().currentUser;
    return storage().ref('/' + email + '/' + ITEMS_COLLECTION + '/' + fileName);
};