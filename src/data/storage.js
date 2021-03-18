import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
import { ITEMS_COLLECTION } from './constants';

export const getPhotoUrl = async (fileName) => {
    return fileName
        ? await getRef(fileName).getDownloadURL()
        : null;
};

export const addPhoto = async (fileUri, fileName) => {
    fileName
        ? await getRef(fileName).putFile(fileUri)
        : null;
};

export const removePhoto = async (fileName) => {
    fileName
        ? await getRef(fileName).delete()
        : null;
};

const getRef = (fileName) => {
    const { email } = auth().currentUser;
    return storage().ref('/' + email + '/' + ITEMS_COLLECTION + '/' + fileName);
};