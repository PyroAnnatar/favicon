import React, { useEffect, useState } from "react";
function useFavicon(value) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    const link = document.querySelector("link[rel='icon']");

    if (!link) {
      setMessage("We don't deal with your kind here, stranger");
    }

    if (value) {
      link.href = value;
      setMessage(`Favicon set to: ${value}`);
    } else {
      setMessage(`That's a weird favicon: ${value}`);
    }
  }, [value]);

  return message;
}

const faviconMap = {
  shecodes:
    "https://www.shecodes.io/assets/favicons/favicon-32x32-ef9cc1de3ba7ad6d82e9ad4858c30f59678a695c9c78b52b826bd74f7fc3a02c.png",
  reAct:
    "https://www.reactgroup.org/wp-content/uploads/2020/05/cropped-Favicon-32x32.png",
  react_newsletter: "https://reactnewsletter.com/favicon/favicon-32x32.png",
};

export default function App() {
  const [id, setId] = useState("shecodes");

  const message = useFavicon(faviconMap[id]);

  return (
    <section>
      <h1>useFavicon</h1>
      <div>
        <button
          title="Favicon'u SheCodes logosuna ayarla"
          className={`link ${id === "shecodes" && "active"}`}
          onClick={() => setId("shecodes")}
        >
          SheCodes
        </button>
        <button
          title="Favicon'u ReAct logosuna ayarla"
          className={`link ${id === "reAct" && "active"}`}
          onClick={() => setId("reAct")}
        >
          ReAct
        </button>
        <button
          title="Favicon'u React Newsletter logosuna ayarla"
          className={`link ${id === "react_newsletter" && "active"}`}
          onClick={() => setId("react_newsletter")}
        >
          React Newsletter
        </button>
      </div>
      <p>{message}</p>
    </section>
  );
}
// Talimatlar:
// useFavicon, belgenin favicon'unu dinamik olarak güncellemeyi sağlar.

// useFavicon("https://reactnewsletter.com/favicon/favicon-32x32.png")

// useFavicon ile verilen href kullanılarak belgenin favicon'u güncellenmelidir.
// useFavicon'a verilen href değiştiğinde, belgenin favicon'u güncellenmelidir.
// CodePen'de favicon değiştirme yetkisi olmadığı için bu kodu yerel bir React projesinde veya CodeSandbox gibi daha fazla yetki sağlayan platformlarda deneyebilirsiniz.
