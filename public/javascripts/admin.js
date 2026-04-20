// Delete jobPosts
function deleteJob(id) {
    fetch(`/posts/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        location.reload(); // refresh page
    })
    .catch(err => console.log(err));
}

const jobsPerPage = 6;
let currentPage = 1;

const jobCards = document.querySelectorAll(".job-card");
const pagination = document.getElementById("pagination");
  

/* CREATE PAGINATION BUTTONS */
function createPagination(totalPages){

    pagination.innerHTML = "";

    for(let i = 1; i <= totalPages; i++){

        const btn = document.createElement("button");
        btn.innerText = i;

        if(i === currentPage){
            btn.classList.add("active");
        }

        btn.addEventListener("click", function(){
            currentPage = i;
            displayJobs();
        });

        pagination.appendChild(btn);
    }
}

/* Modal */
function openModal(){
    document.getElementById("filterModal").style.display="flex";
}

function closeModal(){
    document.getElementById("filterModal").style.display="none";
}

/* Initial Load */
displayJobs();

function openModal(){
    document.getElementById("filterModal").style.display="flex";
}

function closeModal(){
    document.getElementById("filterModal").style.display="none";
}

window.onclick=function(e){
    let modal=document.getElementById("filterModal");
    if(e.target===modal){
        modal.style.display="none";
    }
}

function applyFilters(){

    let workMode=document.getElementById("workMode").value;
    let experience=document.getElementById("experience").value;
    let location=document.getElementById("location").value.toLowerCase();
    let jobType=document.getElementById("jobType").value;

    let jobs=document.querySelectorAll(".job-card");

    jobs.forEach(job=>{

        let show=true;

        if(workMode!=="Any" && job.dataset.workmode!==workMode){
            show=false;
        }

        if(experience!=="Any" && job.dataset.experience!==experience){
            show=false;
        }

        if(location!=="" && !job.dataset.location.toLowerCase().includes(location)){
            show=false;
        }

        if(jobType!=="Any" && job.dataset.jobtype!==jobType){
            show=false;
        }

        job.style.display=show?"block":"none";

    });

    closeModal();
}

function resetFilters(){

    document.getElementById("workMode").value="Any";
    document.getElementById("experience").value="Any";
    document.getElementById("location").value="";
    document.getElementById("jobType").value="Any";

    let jobs=document.querySelectorAll(".job-card");
    jobs.forEach(job=>{
        job.style.display="block";
    });

    closeModal();
}
