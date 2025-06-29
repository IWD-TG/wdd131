let filteredHikes = hikes.filter(function(hike)) {
    return(
        hike.name.toLowerCase().includes(hikequeary.toLowerCase()) ||
        hike.tags.find(tag => tag.toLowerCase().includes.hikequear.toLowerCase())
    );
};
function compareHikes(a,b){
    if(a.distance < b.distance){
        return -1;
    } else if ( a.distance > b.distance){
        return1;
    } else {
        return 0;
    }

};
let button = document.querySelector('button');
