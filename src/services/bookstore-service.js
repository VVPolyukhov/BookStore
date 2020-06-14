import axios from 'axios'

export default class BookstoreService {
  
  getBooks() {
    return axios.get('./books.json')
  }

}