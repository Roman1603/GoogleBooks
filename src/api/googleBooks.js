import axios from 'axios'

const APIKey = 'AIzaSyDPua-TTmfomi6uYw3QlrWFkmB4nOIJqR4'

export default axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: {
    key: APIKey
  }
})