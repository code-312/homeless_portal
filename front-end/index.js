var resourcesManager = {
    // this can be replaced with info from our api later on
    placeholder_info : [{
        image_link:"http://lorempixel.com/150/150/",
        alt: "image alt",
        url: "https://www.google.com/",
        title: "Resource 1"
    },
    {
        image_link:"http://lorempixel.com/150/150/",
        alt: "image alt",
        url: "https://www.google.com/",
        title: "Resource 2"
    },
    {
        image_link:"http://lorempixel.com/150/150/",
        alt: "image alt",
        url: "https://www.google.com/",
        title: "Resource 3"
    }],
    resourcesDiv : document.getElementById('resources-grid'),
    createIcons: function() {
        for (var i = 0; i < this.placeholder_info.length; i++) {
            var iconDiv = document.createElement('div');
            iconDiv.className += "resource-thumbnail";

            var a = document.createElement('a');
            a.setAttribute("href", this.placeholder_info[i].url);

            var img = document.createElement('img');
            img.className += "thumbnail-image"
            img.setAttribute("src", this.placeholder_info[i].image_link);
            img.setAttribute("alt", this.placeholder_info[i].alt);

            var title = document.createElement('p');
            title.className += "thumbnail-title";
            title.innerText = this.placeholder_info[i].title;

            a.appendChild(img);
            iconDiv.appendChild(a);
            iconDiv.appendChild(title)

            this.resourcesDiv.appendChild(iconDiv);    
        }
    }
}

resourcesManager.createIcons()