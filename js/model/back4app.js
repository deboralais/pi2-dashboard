const url = "https://parseapi.back4app.com/classes/teste";
const headers = {
  "X-Parse-Application-Id": "EcIIFYBA0VCMRmmsCujPljpGDO3Tc5dSVvfJs3by",
  "X-Parse-REST-API-Key": "2HG5zAbU30J78rvHiQS310SyJNhzBWzTpKW00dO3",
};
const content_type = { "Content-Type": "application/json" };


const selectCount = () => {
  const params = new URLSearchParams({
    count: 1,
  });
  
  fetch(`${url}?${params.toString()}`, {
    method: "GET",
    headers: headers,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

