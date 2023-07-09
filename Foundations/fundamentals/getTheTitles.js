const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];


function getTheTitles(obj){
    let bookList = [];
    for(i in obj){
        bookList.push(obj[i]['title'])
    }
    return bookList;

};

console.log(getTheTitles(books));