import axios from "axios"
    const Api=axios.create({
        baseURL:"https://restcountries.com/"
    })

    export const getFlag=()=>{
         return Api.get("/v3.1/independent?status=true&fields=population,capital,region,flags,name")
    }
    export const getDetails=((id)=>{
        return Api.get(`v3.1/name/${id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`)

    })

