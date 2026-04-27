const cargoManifest = { containerId: -88, destination: "Soledad", weight: NaN };

/* Normalize units of the cargo manifest, returns a new cargo manifests with the units converted to kg */
const normalizeUnits = (manifest) => {
  let newManifest = {...manifest};
  if (newManifest.unit == "lb") {
    newManifest.weight *= 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
};

/* Validate the cargo manifest, returns an object with the missing or invalid fields if the manifest is invalid, 
or an empty object if the manifest is valid */
const validateManifest = (manifest) => {
  let newManifest = {};
  let validObject = true; 

  // validate containerId
  if (!Object.hasOwn(manifest, "containerId")) {
    newManifest.containerId = "Missing";
    validObject = false;
  } 
  else if (!Number.isInteger(manifest.containerId) ||manifest.containerId <= 0 || 
    Number.isNaN(manifest.containerId) || manifest.containerId == null && manifest.containerId != "Missing") {
    newManifest.containerId = "Invalid";
    validObject = false;
  }
  

  // validate destination
  if (!Object.hasOwn(manifest, "destination")) {
    newManifest.destination = "Missing";
    validObject = false;
  }
  else if (typeof manifest.destination != "string" || manifest.destination.trim() == "") {
    newManifest.destination = "Invalid";
    validObject = false;
  }
  

  // validate weight
  if (!Object.hasOwn(manifest, "weight")) {
    newManifest.weight = "Missing";
    validObject = false;
  }
  else if (typeof manifest.weight !== "number" ||manifest.weight <= 0 || 
    Number.isNaN(manifest.weight) || manifest.weight == null && manifest.weight != "Missing") {
    newManifest.weight = "Invalid";
    validObject = false;
  }


  // validate unit
  if (!Object.hasOwn(manifest, "unit")) {
    newManifest.unit = "Missing";
    validObject = false;
  }
  else if (manifest.unit != "kg" && manifest.unit != "lb" && manifest.unit != "Missing") {
    newManifest.unit = "Invalid";
    validObject = false;
  }


  // validate hazmat
  if (!Object.hasOwn(manifest, "hazmat")) {
    newManifest.hazmat = "Missing";
    validObject = false;
  }
  else if (typeof manifest.hazmat !== "boolean" && manifest.hazmat != "Missing") {
    newManifest.hazmat = "Invalid";
    validObject = false;
  }


  return validObject == true ?  {} : newManifest;
}

/* Process the cargo manifest, validates the manifest and normalizes the units if the manifest is valid,
 returns the total weight in kg if the manifest is valid, or an object with the missing or 
 invalid fields if the manifest is invalid */
void function processManifest(manifest) {
  let newManifest = {...manifest};
  let postValidationManifest = validateManifest(newManifest);
  let containerId = newManifest.containerId;

  // check validity
  if (Object.keys(postValidationManifest).length == 0) {
    let normalizedManifest = normalizeUnits(newManifest);
    let weight = normalizedManifest.weight;
    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${weight} kg`);
  }
  else {
    console.log(`Validation error: ${containerId}`);
    console.log(postValidationManifest);
  }
}

console.log(processManifest(cargoManifest));
