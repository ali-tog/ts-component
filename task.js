const pets = [
    {  cat: "ali" },
    {  cat: "jeff" },
    {  cat: "mike" },
    {  dog: "tom" },
    {  dog: "jim" },
    {  dog: "larry" },
  ];

((prop) => {
    
    console.log(prop);
})(pets);

// output
// {
//    dog: ["ton", "fim"...]
//.   cat: ["ali", ...]
// }
