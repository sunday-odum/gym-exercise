
export const exerciseOptions= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9d0ef34c18msha9b9dc97ba6048ap14e6dbjsnbe91af1474e0',
  },
};


export const fetchData = async(url, options) => {
  
    const res = await fetch(url, options); 
    const data = await res.json();
    
    return data;

};
