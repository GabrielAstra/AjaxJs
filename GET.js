var GET = XMLHttpRequest();

GET.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1");

GET.send();

GET.onreadysatechange = function(){
    if (GET.readyState == 4 && GET.status == 200){
        var data = GET.responseText;

        console.log(data);
    }
}