function toggleSidebar() {
    document.querySelector(".container").classList.toggle("sidebar-hidden");
    document.querySelector(".leftside").classList.toggle("hide");
}

function openSearch() {
    document.getElementById("search_ex").style.display = "block";
}
document.addEventListener("click", function(e){
    const search = document.querySelector(".search");
    const dropdown = document.getElementById("search_ex");

    if(!search.contains(e.target)){
        dropdown.style.display = "none";
    }
});