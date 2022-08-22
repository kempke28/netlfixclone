import {useState, useEffect, useContext} from "react";
import {FirebaseContext} from "../context/firebase";

export default function useContent(target) {
    const [content, setContent] = useState([]);
    const {firebase} = useContext(FirebaseContext);

    useEffect(() => {
        firebase
            .firestore()
            .collection(target) //access database collection is ethier films or series
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id, //get the specific id with map inside of the data object.
                }));

                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
        })
    }, []);

    return {[target]: content};
}
