// api = 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
const api = "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"; // Your real key
const inp = document.getElementById("inp");
const images = document.querySelector(".images");

const getImage = async () => {
  if (!inp.value.trim()) {
    alert("Please enter a prompt.");
    return;
  }

  const methods = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${api}`
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: inp.value,
      n: 3,
      size: "256x265"
    })
  };

  const res = await fetch("https://api.openai.com/v1/images/generations", methods);

  if (!res.ok) {
    const error = await res.text();
    console.error("API Error:", res.status, error);
    return;
  }

  const data = await res.json();
  const imagesList = data.data;

  images.innerHTML = "";
  imagesList.forEach(photo => {
    const container = document.createElement("div");
    const img = document.createElement("img");
    img.src = photo.url;
    container.appendChild(img);
    images.appendChild(container);
  });
};
