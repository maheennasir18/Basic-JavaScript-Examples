/**
 * The canCoverDesiredRange function determines whether a given set of hardware cameras can 
 * collectively cover a desired range of distancesand light levels
 * @param {object} desiredCharacteristics 
 * @param {Array<object} hardwareCameras 
 * @returns {Boolean} Final result after comaprsion.
 * @author Maheen Nasir
 */
function canCoverDesiredRange(desiredCharacteristics, hardwareCameras) {
    const { minDistance, maxDistance, minLight, maxLight } = desiredCharacteristics;

    let combinedMinDistance = Infinity;
    let combinedMaxDistance = -Infinity;
    let combinedMinLight = Infinity;
    let combinedMaxLight = -Infinity;

    for (const camera of hardwareCameras) {
        combinedMinDistance = Math.min(combinedMinDistance, camera.minDistance);
        combinedMaxDistance = Math.max(combinedMaxDistance, camera.maxDistance);
        combinedMinLight = Math.min(combinedMinLight, camera.minLight);
        combinedMaxLight = Math.max(combinedMaxLight, camera.maxLight);
    }

    // here checking if the combined range covers the desired range
    const distanceCovered = (combinedMinDistance <= minDistance && combinedMaxDistance >= maxDistance);
    const lightCovered = (combinedMinLight <= minLight && combinedMaxLight >= maxLight);

    // Debugging logs for better understanding of output
    console.log("Combined Subject Distance Range:", combinedMinDistance, "to", combinedMaxDistance);
    console.log("Desired Subject Distance Range:", minDistance, "to", maxDistance);
    console.log("Combined Light Level Range:", combinedMinLight, "to", combinedMaxLight);
    console.log("Desired Light Level Range:", minLight, "to", maxLight);

    return distanceCovered && lightCovered;
}

const desiredCharacteristics = {
    minDistance: 1,
    maxDistance: 10,
    minLight: 100,
    maxLight: 1000
};

const hardwareCameras = [
    { minDistance: 0.5, maxDistance: 5, minLight: 50, maxLight: 800 },
    { minDistance: 3, maxDistance: 15, minLight: 200, maxLight: 1200 },
];

console.log(canCoverDesiredRange(desiredCharacteristics, hardwareCameras));