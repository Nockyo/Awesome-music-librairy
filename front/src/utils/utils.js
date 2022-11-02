export const shuffle = (sourceArray)  => {
    for (let i = 0; i < sourceArray.length - 1; i++) {
        let j = i + Math.floor(Math.random() * (sourceArray.length - i));
  
        let temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

export const secondsToMinutes = (duration) => {
	let initialDuration = Math.floor(duration);
	let secondsDuration = initialDuration%60;
	if (secondsDuration < 10){
		secondsDuration = '0' + secondsDuration;
	}
	let minuteDuration = (initialDuration/60).toString().split('.')[0];
	if (minuteDuration < 10){
		minuteDuration = '0' + minuteDuration;
	}
	let newDuration = minuteDuration + ':' + secondsDuration;
	return newDuration
}