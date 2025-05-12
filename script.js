// Data
const films = [
    {
      title: 'Dupatta',
      year: '1952',
      language: 'Urdu',
      genre: 'Drama',
      synopsis: 'The film revolves around a girl who marries an army officer. They both soon have a baby daughter. Soon the husband is sent to the front of World War II. Later he is reported missing. After many months of anxiety and heartbreak, the husband returns disfigured, mutilated and not easily recognizable. The devoted wife still accepts him back despite his handicaps.',
      rating: 4,
      youtubeLink: 'https://www.youtube.com/watch?v=agY78f1W8s4',
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Dupatta_%281952_film%29.jpg'
    },
    {
      title: 'Yakke Wali',
      year: '1957',
      language: 'Punjabi',
      genre: 'Romance',
      synopsis: 'The film revolves around a hardworking and brave Punjabi woman, Laali, who supports her family by driving a tanga. She drives around her village but one day owing to her fight with some of the villagers, she leaves the village and goes to the city of Lahore. Being a female in Lahore, it becomes difficult for her to drive the tanga, so she decides to disguise herself as a man and starts driving for her survival and to make a daily living.',
      rating: 5,
      youtubeLink: 'https://youtu.be/t7fg8RuEM3Y',
      poster: 'https://upload.wikimedia.org/wikipedia/en/0/00/Yakke_Wali.jpg'
    },
    {
      title: 'Jinnah',
      year: '1998',
      language: 'English',
      genre: 'History',
      synopsis: 'The film is a Pakistani-British epic biographical film which follows the life of the founder of Pakistan, Muhammad Ali Jinnah. ',
      rating: 4,
      youtubeLink: 'https://www.youtube.com/watch?v=NNacdrX-6Jc',
      poster: 'https://upload.wikimedia.org/wikipedia/en/1/15/Jinnah_movie_poster.jpg'
    },
    {
      title: 'Jago Hua Savera',
      year: '1959',
      language: 'Bengali',
      genre: 'Drama',
      synopsis: 'The film depicts the daily lives of East Pakistani fishermen in the village of Saitnol (near Dhaka) and their struggles with loan sharks.',
      rating: 4,
      youtubeLink: 'https://youtu.be/SLhQYYjPVlE',
      poster: 'https://a.ltrbxd.com/resized/film-poster/2/7/0/7/0/1/270701-the-day-shall-dawn-0-230-0-345-crop.jpg?v=6caafe3e70'
    },
    {
      title: 'Behan Bhai',
      year: '1968',
      language: 'Urdu',
      genre: 'Drama',
      synopsis: 'A woman and her five children are separated during the partitions chaos. Years later, they live separate lives, each struggling to survive, while their mother loses her sanity, searching for them.',
      rating: 4,
      youtubeLink: 'https://youtu.be/88GOseIpdQg',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCklg57Juz2rd3Chz8R6M3gJo5j_vpQazNQ&s'
    },
    {
      title: 'Society Girl',
      year: '1976',
      language: 'Urdu',
      genre: 'Drama',
      synopsis: 'Ms. Juliana Wilson, a girl who is forced to sell her body to the highest bidder by night to support her ailing mother and her young sister Moona through an education. During the day Juliana works as a secretary but at night she is transformed into the sultry, seductive club going, chain smoking Society Girl',
      rating: 4,
      youtubeLink: 'https://youtu.be/fGBwahISNC0',
      poster: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Society_Girl_film.jpg'
    },
    {
      title: 'Maula Jutt',
      year: '1979',
      language: 'Punjabi',
      genre: 'Action',
      synopsis: 'Set in a village near Kabirwala, Maula Jatt, once a feared warrior, now maintains peace across 25 villages. When old enemies resurface, violence erupts again. Amid betrayals, battles, and shifting loyalties, Maula seeks justice, not revenge. In the end, he lays down his Gandasa, calling for peace and reconciliation.',
      rating: 4,
      youtubeLink: 'https://youtu.be/AYzxahsb80A',
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Maula_Jatt_%281979%29.jpg/330px-Maula_Jatt_%281979%29.jpg'
    },
    {
      title: 'Khuda Kay Liye',
      year: '2007',
      language: 'Urdu',
      genre: 'Thriller',
      synopsis: 'The film follows Mansoor and Sarmad, two singers whose lives changed after the attacks in America ',
      rating: 4,
      youtubeLink: 'https://youtu.be/mypSWkJr6W0',
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/b5/Khuda-kay-liye.JPG'
    },
    {
      title: 'Bol',
      year: '2011',
      language: 'Urdu',
      genre: 'Drama',
      synopsis: 'It concerns a family facing financial difficulties caused by too many children and changing times, with a major plot involving the fathers desire to have a son and his rejection of his existing intersex child.',
      rating: 4,
      youtubeLink: 'https://www.youtube.com/watch?v=example1',
      poster: 'https://upload.wikimedia.org/wikipedia/en/e/ec/Bol2011.jpg'
    },
    {
      title: 'Zinda Bhaag',
      year: '2013',
      language: 'Punjabi',
      genre: 'Drama',
      synopsis: 'The story of Zinda Bhaag unravels the theme of illegal immigration, called dunky. This involves inhuman and dangerous methods of crossing borders into foreign lands. It is a film about three young men trying to escape the reality of their everyday lives and succeeding in ways they had least expected.',
      rating: 4,
      youtubeLink: 'https://youtu.be/vKEla_jFZg8',
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7c/Zinda_Bhaag.jpg'
    },
    {
      title: 'Ho Mann Jahaan',
      year: '2015',
      language: 'Urdu',
      genre: 'Romance',
      synopsis: 'The film revolves around three main characters, Arhan, Manizeh, and Nadir. The story is about their friendship born out of shared experiences, passion for music, and aspiration for fame.',
      rating: 4,
      youtubeLink: 'https://youtu.be/wyL70mTONCw',
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/26/Ho_Mann_Jahaan.jpg'
    },
    {
      title: 'Waar',
      year: '2013',
      language: 'Urdu',
      genre: 'Action',
      synopsis: 'The film follows Major Mujtaba Rizvi, an officer, who returns from his retirement to save Pakistan from a major terrorist attack.',
      rating: 4,
      youtubeLink: 'https://youtu.be/ZVj-QoF-8dU',
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Waar_%28film_poster%29.jpg'
    },

    {
    title: 'Kartar Singh',
    year: '1959',
    language: 'Punjabi',
    genre: 'Crime',
    synopsis: 'Kartar Singh is a 1959 Pakistani Punjabi-language film about the partition of India in 1947 and the widespread violence that accompanied it.',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=lHKVEdxP2js',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Kartar_Singh_film_poster.jpg'
     },

    {
    title: 'Heera aur Pathar',
    year: '1964',
    language: 'Urdu',
    genre: 'Romance',
    synopsis: 'Heera Aur Pathar is a 1964 Pakistani Urdu language black-and-white film. It was the first film of Waheed Murad as a lead actor who also produced it.',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=yG-H9K3DgXk',
    poster: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Heera_aur_pathar_poster.jpg'
    },

    {
    title: 'Aakhri Station',
    year: '1965',
    language: 'Urdu',
    genre: 'Mystery',
    synopsis: 'Aakhri Station is a 1965 Pakistani Urdu film based on short story Pagli by feminist Urdu literature writer Hajra Masroor. The story of the film revolves around the romance of Fozia, station masters daughter and Jameel, an honest engineer surrounded by corrupt contractors.',
    rating: 5,
    youtubeLink: 'https://www.youtube.com/watch?v=-weLuhVGC2w',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Aakhri_Station_film.jpg'
    },

    {
    title: 'Yousuf Khan Sher Bano',
    year: '1970',
    language: 'Pashto',
    genre: 'Romance',
    synopsis: 'Yousuf Khan Sher Bano was the first-ever Pashto film released in Pakistan. The story is based on the Pashto folk story Yousuf Khan and Sher Bano. The tale has also been referred to as the Pashto version of Romeo and Juliet',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=EkQ8pSxXfEc',
    poster: 'https://i.tribune.com.pk/media/images/960501-YousafAoSherbanocopy-1442773949/960501-YousafAoSherbanocopy-1442773949.jpg'
    },

    {
    title: 'Umrao Jaan Ada',
    year: '1972',
    language: 'Urdu',
    genre: 'Romance',
    synopsis: 'Umrao Jaan Ada is a Pakistani musical romantic drama film loosely based on the 1899 novel of the same name by Mirza Hadi Ruswa. It revolves around the entire life journey of a courtesan from Lucknow and her tragic romance with a Nawab.',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=_7iYsGUTd70',
    poster: 'https://upload.wikimedia.org/wikipedia/en/5/52/Umarao_Jaan_Ada.jpg'
      },

    {
    title: 'Dubai Chalo',
    year: '1979',
    language: 'Punjabi',
    genre: 'Action',
    synopsis: 'The trials and tribulations of an uncouth rustic, who is overtaken by the "Dubai" syndrome (of minting money through a lucrative job), and is, in the bargain, defrauded and deprived of all his savings by self-styled recruiting agents. Accompanied by a group of simpletons, all of whom want to get to Dubai, he lands in a forced labor camp, but somehow manages to escape. On his return home, he is shocked to find that his sister has committed suicide after having been sexually assaulted by a ruffian. In a fit of rage, he kills the latter',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=dqeAeuoZupw',
    poster: 'https://i.ytimg.com/vi/dqeAeuoZupw/maxresdefault.jpg'
    },


    {
    title: 'Haseena Atom Bomb',
    year: '1990',
    language: 'Pashto',
    genre: 'Action',
    synopsis: ' Haseena Atom Bomb is a 1990 cult Pakistani film directed by Saeed Ali Khan.Originally recorded in Pashto on a low-budget, the film was subsequently dubbed in Urdu, becoming a national blockbuster.',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=c5oiEQuagKA',
    poster: ' https://upload.wikimedia.org/wikipedia/en/8/8e/Haseena_Atom_Bomb_film_poster.jpg'
    },

    {
    title: 'Sarkata Insaan',
    year: '1994',
    language: 'Urdu',
    genre: 'Sci-Fi',
    synopsis: 'Sarkata Insaan is a science fiction horror action drama film directed, produced and visual effects created by Saeed Rizvi.',
    rating: 3,
    youtubeLink: 'https://www.youtube.com/watch?v=6wZeW3q9BoI',
    poster: ' https://m.media-amazon.com/images/M/MV5BOWQyZWVmNmMtNDY5Mi00YjE2LWJlNzgtM2ZjMTRiZTA5N2E4XkEyXkFqcGc@._V1_.jpg'
    },

    {
    title: 'Tere Pyaar Mein',
    year: '2000',
    language: 'Urdu',
    genre: 'Romance',
    synopsis: ' The story is about a young Indian Sikh girl Preety, who goes to the historic city of Lahore, Pakistan for a religious pilgrimage of a Sikh holy place there with her father. A Pakistani boy named Ali, who is a banker, falls in love with her',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=3KohEQI6iwo',
    poster: ' https://upload.wikimedia.org/wikipedia/en/0/08/Tere-Pyaar-Main-Dvd-copy.jpg'
    },    

    {
    title: 'Zibahkhana',
    year: '2007',
    language: 'Urdu/English',
    genre: 'Horror',
    synopsis: ' Zibah khana is an Urdu- and English-language zombie film. On their way to a concert, a group of teens are diverted by a political protest, only to encounter a family of flesh-hungry psychopaths.',
    rating: 3,
    youtubeLink: 'https://www.youtube.com/watch?v=QR6LbX-Nfrg',
    poster: ' https://upload.wikimedia.org/wikipedia/en/5/51/Zibahkhana_2007_film_poster.jpg'
     },

    {
    title: 'Ramchand Pakistani',
    year: '2007',
    language: 'Urdu',
    genre: 'Crime',
    synopsis: 'The film is based on a true story of a boy who inadvertently crosses the border between Pakistan and India and the following ordeal that his family has to go through',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=q5SlisJJyNI',
    poster: ' https://upload.wikimedia.org/wikipedia/en/e/ec/Ramchand_pakistani_poster.JPG'
    },

    {
    title: 'Motorcycle Girl',
    year: '2018',
    language: 'Urdu',
    genre: 'Adventure',
    synopsis: 'Motorcycle Girl is a biographical adventure drama film based on the life of motorcyclist Zenith Irfan who travels to northern areas of Pakistan on a motorbike to fulfil her fathers wish, facing many challenges along the way',
    rating: 4,
    youtubeLink: 'https://www.youtube.com/watch?v=HH65IBdFg5c',
    poster: ' https://upload.wikimedia.org/wikipedia/en/6/69/Motorcycle_Girl_Official_Released_Poster.jpg'
    },

    ]
  // Sort and group films by decade
  function groupByDecade(films) {
    const grouped = {};
    films.forEach(film => {
      const decade = Math.floor(parseInt(film.year) / 10) * 10;
      if (!grouped[decade]) {
        grouped[decade] = [];
      }
      grouped[decade].push(film);
    });
    return grouped;
  }
  
  // Render grouped films
  function renderFilmsGroupedByDecade(films) {
    const container = document.getElementById('films-container');
    container.innerHTML = '';
  
    const grouped = groupByDecade(films);
    const sortedDecades = Object.keys(grouped).sort();
  
    sortedDecades.forEach(decade => {
      const decadeSection = document.createElement('div');
      decadeSection.classList.add('decade-section');
  
      const header = document.createElement('h2');
      header.textContent = `${decade}s`;
      decadeSection.appendChild(header);
  
      const filmRow = document.createElement('div');
      filmRow.classList.add('film-row');
  
      grouped[decade].forEach(film => {
        const filmCard = document.createElement('div');
        filmCard.classList.add('flip-card');
        filmCard.innerHTML = `
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${film.poster}" />
            </div>
            <div class="flip-card-back">
              <strong>${film.title}</strong>
              <p><strong>Year:</strong> ${film.year}</p>
              <p><strong>Language:</strong> ${film.language}</p>
              <p><strong>Genre:</strong> ${film.genre}</p>
              <p><strong>Synopsis:</strong> ${film.synopsis}</p>
              <p><strong>Maryam's Rating:</strong> ${film.rating} ⭐</p>
            </div>
          </div>
        `;
        filmCard.onclick = () => {
          window.open(film.youtubeLink, '_blank');
        };
        filmRow.appendChild(filmCard);
      });
  
      decadeSection.appendChild(filmRow);
      container.appendChild(decadeSection);
    });
  }
  
  // Calling the function
  renderFilmsGroupedByDecade(films);