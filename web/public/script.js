let profileImg = document.getElementById("profile-img");
let inputImg = document.getElementById("file");
let labelImg = document.getElementById("img-label");
inputImg.onchange = () => {
  profileImg.src = URL.createObjectURL(inputImg.files[0]);
  if(profileImg.src){
    labelImg.style.display = "none";
}
};

