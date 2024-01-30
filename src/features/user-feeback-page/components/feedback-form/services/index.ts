import axios from "../../../../../Services/axios";
interface Attribute {
  [key: string]: string;
}
function useMint() {
  const project = async (projectID: any, attributes: Attribute) => {
    // const info = await uploadAudio(file);
    // if (info === null) {
    //   return null;
    // }
    const number = Number(projectID);
    console.log({
      number: 1,
      attribute: attributes,
    });

    const { data } = await axios.post(`/projects/${number}/nfts`, {
      attributes: attributes,
      name: "Mr Biggs Feedback",
      image: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    });
    return data;
  };

  return { project };
}

interface Object2Item {
  id: number;
  name: string;
  label: string;
  required: boolean;
  question_type: string;
  list: any[];
}
interface KeyValue {
  [key: string]: string;
}
export function filterUniqueKeyValues(arr: KeyValue[]): KeyValue[] {
  const uniquePairs: KeyValue = {};
  arr.forEach((item) => {
    const [key, value] = Object.entries(item)[0];
    if (!(key in uniquePairs)) {
      uniquePairs[key] = value;
    }
  });
  const result: KeyValue[] = Object.entries(uniquePairs).map(
    ([key, value]) => ({
      [key]: value[0].toString(),
    })
  );

  return result;
}

export function filterObject2(array1: KeyValue[], object2: Object2Item[]) {
  const filteredObject: Record<string, string> = {};

  array1.forEach((item) => {
    const key = Object.keys(item)[0]; // Extract the key from the array item
    const matchedObject = object2.find((obj) => obj.name === key); // Find the corresponding object in object2
    if (matchedObject) {
      filteredObject[matchedObject.label] = item[key];
    }
  });
  return filteredObject;
}

export default useMint;
