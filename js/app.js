const item = document.getElementById('container');


fetch('https://mocki.io/v1/e5ef7d75-bb39-4b67-81eb-383d3b6c28f4')
.then(res => res.json())
.then(function(data){
    for (let index = 0; index < data.length; index++) {
        console.log(data[index]);
        item.innerHTML+=`<div  style="margin-bottom: 50px" class="col-lg-12 col-md-6  portfolio-item filter-app wow fadeInUp rey" id="output">
        <div class="portfolio-wrap">
        <figure>
            <img src=${data[index].Images} class="img-fluid eux" alt="" id="img">
            <a href="${data[index].Images}" data-lightbox="portfolio" data-title="" class="link-preview" title="Preview"><i class="ion ion-eye"></i></a>
            <a href="" class="link-details" title="More Details"><i class="ion ion-android-open"></i></a>
        </figure>

        <div class="portfolio-info">
            <span><a href="">${data[index].Nom_hotel}</a></br
            <p>${data[index].Description}</p>
            </span> 
            <p>        <button class="nosoubliesbtn"><a class="yu" href="paypal.html">Contribuer</a></button>
            </p>
        </div>

        </div>
        </div>
        `
    }
     })