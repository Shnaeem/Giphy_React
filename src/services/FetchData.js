import axios from "axios";

const FetchData  = async () => {
    

    
    const xxyy = "ULw4daLtlqPVJvDNBELYe87ltTEKWn5U";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${xxyy}`;

    const response = await axios.get (url)
    .then((res)=>{
        return res
    })

    return response;
}

export default FetchData;