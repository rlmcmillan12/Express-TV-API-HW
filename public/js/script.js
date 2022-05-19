const seasonSelect = document.querySelector('#season')
const episodeSelect = document.querySelector('#episodes')
const episodeDetails = document.querySelector('.episode-details')

function seasonSelectRender(seasons) {
    const seasonsHtml = seasons.map(season => {
        return `<option value ="${season.season}">${season.season}</option>`
    }).join('')
    seasonSelect.innerHTML = `<option value ="default">-------</option>` + seasonsHtml
}

function episodeSelectRender(episodes) {
    const episodesHtml = episodes.map(episode => {
        return `<option value ="${episode.number}">${episode.number}</option>`
    }).join('')
    episodeSelect.innerHTML = `<option value ="default">-------</option>` + episodesHtml
}

fetch('/api/v1/episodes')
    .then(res => res.json())
    .then(data => {
        seasonSelectRender(data)
    });

seasonSelect.addEventListener('change', (e) => {
    const season = e.target.value
    fetch(`/api/v1/episodes/${season}`)
        .then(res => res.json())
        .then(data => {
            episodeSelectRender(data)
        });
});

episodeSelect.addEventListener('change', (e) => {
    const episodeNum = e.target.value
    fetch(`/api/v1/episodes/${seasonSelect.value}`)
        .then(res => res.json())
        .then(data => {
            for (let episode of data) {
                if (episode.number == episodeNum) {
                    episodeDetails.innerHTML = `<li class="episode-name">${episode.name}</li><li class="air-date">${episode.air}</li>`
                }
            }
        });
});