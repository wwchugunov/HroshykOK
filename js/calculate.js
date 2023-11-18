function updateValue(sliderId, outputId) {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);
    output.innerText = slider.value;
    console.log("Slider Value: " + slider.value);
}

