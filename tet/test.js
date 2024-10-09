// membuat function asynchronous callback

function FetchData(callback) => {
  console.log("start");

  setTimeout(() => {
    console.log("sedang berjalan")
  }, 2000);

  console.log("end");
}
