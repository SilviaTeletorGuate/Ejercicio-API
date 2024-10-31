document.body

async function getData() {
    const url = "https://rickandmortyapi.com/api/character";
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const resultRickMorty = await response.json(); 
      resultRickMorty?.results?.map(items => {
        console.log("🚀 ~ getData ~ items:", items.species)
        const paragraph = document?.createElement("p")
        paragraph.innerText = items.species
        document.body.appendChild(paragraph)
      })
      
      //  console.log("this is", resultRickMorty.results.map(item => item.name))
    }  
    catch (error) {
      console.error(error.message);
    }
  }

  getData()