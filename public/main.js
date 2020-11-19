let n = 1;
getPAGE.onclick = () => {
  const request = new XMLHttpRequest();
  if (n < 3) {
    request.open("GET", `page${n + 1}`);
    request.onreadystatechange = () => {
      if (request.readyState == 4 && request.status == 200) {
        const array = JSON.parse(request.response);
        array.forEach((ele) => {
          const li = document.createElement("li");
          li.textContent = ele.id;
          ul.appendChild(li);
        });
        n++;
      }
    };
    request.send();
  }
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `page1`);
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      console.log(request.response);
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `1.xml`);
  request.onreadystatechange = () => {
    if (request.readyState == 4 && request.status == 200) {
      const xml = request.responseXML;
      const text = xml.getElementsByTagName("warning")[0].textContent.trim();
      console.log(text);
    }
  };
  request.send();
};
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "style.css");
  request.onload = () => {
    const style = document.createElement("style");
    style.innerHTML = request.response;
    document.head.appendChild(style);
  };
  request.send();
};
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.js");
  request.onload = () => {
    const js = document.createElement("script");
    js.innerHTML = request.response;
    document.body.appendChild(js);
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "2.html");
  request.onload = () => {
    const div = document.createElement("div");
    div.innerHTML = request.response;
    document.body.appendChild(div);
  };
  request.send();
};
