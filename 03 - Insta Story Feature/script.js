const arr =[
    {
        dp : "first.jpg",
        story : "first.jpg"
    },
   
    {
        dp : "third.jpg",
        story :  "third.jpg"
    },
    {
        dp : "six.jpg",
        story :"six.jpg"
    },
    {
        dp : "fifth.jpg",
        story : "fifth.jpg"
    },

    {
        dp : "second.jpg",
        story : "second.jpg"
    },

    {
        dp : "six.jpg",
        story : "six.jpg"
    }
]

clutter  = '';
const stories =  document.querySelector('.stories')
const fullDiv  = document.querySelector('.full-div')
arr.forEach((vr, i)=>{
    clutter += `<div class="story">
    <img id = "${i}" src="${vr.dp}" alt="">
</div>`;

})
document.querySelector('.stories').innerHTML = clutter
// console.log(clutter);

stories.addEventListener('click', (e)=>{
    console.log(arr[e.target.id].story);

    // method 1 using img tag
    fullDiv.style.display  = "block";
    // fullDiv.innerHTML = `<img class = "full-img" src="${arr[e.target.id].story}" />`;

    // method 2  using URL
    fullDiv.style.backgroundImage = `url(${arr[e.target.id].story})`
    setTimeout(() => {
        fullDiv.style.display  = "none";
    }, 2000);
})
