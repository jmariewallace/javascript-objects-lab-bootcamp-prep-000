var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  return delete object.key
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return object.unshift(key: value)
}

/*destructivelyDeleteFromObjectByKey(object, key)*/