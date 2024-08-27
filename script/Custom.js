const countryDropdown = document.getElementById("gcc-country");

const provinceContainer = document.getElementById("provinceContainer");
console.log(provinceContainer);


countryDropdown.addEventListener("change", function () {
  console.log(this.value);
  
  if (this.value === "Saudi Arabia") {
    provinceContainer.style.display = "block";
  } else {
    provinceContainer.style.display = "none";
  }
});
