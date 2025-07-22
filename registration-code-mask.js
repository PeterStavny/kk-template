const inputMasker = () => {
  const input = document.querySelector("input[name='extension_Code']");
  if (input && !input.dataset.masked) {
    input.setAttribute("pattern", "[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}");
    input.setAttribute("placeholder", "XXX-XXX-XXX");
    input.addEventListener("input", function (e) {
      let val = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      val = val.slice(0, 9).replace(/(.{3})(.{3})?(.*)?/, function (_, a, b, c) {
        return [a, b, c].filter(Boolean).join("-");
      });
      e.target.value = val;
    });
    input.dataset.masked = "true";
  }
};

const observer = new MutationObserver(inputMasker);
observer.observe(document.body, { childList: true, subtree: true });