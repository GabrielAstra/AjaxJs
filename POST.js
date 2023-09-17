var post = XMLHttpRequest();

var documento = {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }

post.open("POST", "https://jsonplaceholder.typicode.com/posts");


post.onreadystatechange  = function(){
    if(XPathResult.readyState == 4){
        console.log(xhr);
    }
}


xhr.send(documento)