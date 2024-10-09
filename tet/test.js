// membuat function asynchronous callback

function FetchData(callback) => {
  console.log("start");

  setTimeout(() => {
    console.log("sedang berjalan")
  }, 2000);

  console.log("end");
}


async function userData() => {
  const response = await fetch("https://jsonplaceholder.org/posts/1")
  const data = response.json()
  console.log(data)
}
