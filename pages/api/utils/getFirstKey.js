export default function getFirstKey(object) {
  console.log("getFirstKey, Object.keys(object)[0]: ", Object.keys(object)[0]);
  console.log("getFirstKey, object[Object.keys(object)[0]]: ", object[Object.keys(object)[0]]);
  return object[Object.keys(object)[0]];
}
