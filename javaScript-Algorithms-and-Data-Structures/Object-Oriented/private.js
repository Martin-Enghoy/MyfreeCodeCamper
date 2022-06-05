function Bird() {
    let weight = 15;    // Private var

    this.getWeight = function () {  // Private function
        return weight;
    };

}