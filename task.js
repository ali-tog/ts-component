const nameDataList = [
    {  name: "ali" },
    {  name: "jeff" },
    {  name: "barry" },
    {  lastName: "tom" },
    {  lastName: "jim" },
    {  lastName: "larry" },
  ];

const  run = (function (prop) {
    console.log(prop);
})(nameDataList);

// output
// {
//    lastname: ["ton", "fim"...]
//.   name: ["ali", ...]
// }
