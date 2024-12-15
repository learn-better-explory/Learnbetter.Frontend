export function clone(arr1){
    return JSON.parse(JSON.stringify(arr1));
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function removeByElement(array, element){
    const index = array.indexOf(element);

    return array.splice(index, 1)
}

export function shuffle(array) {
    let currentIndex = array.length;
  

    while (currentIndex != 0) {
  

      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }