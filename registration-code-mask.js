(function () {
  console.log("⏳ Čakám na input #extension_Code...");

  const maskInput = (input) => {
    console.log("✅ Input nájdený, aplikujem masku...");
    input.setAttribute("pattern", "[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}");
    input.setAttribute("placeholder", "XXX-XXX-XXX");
    input.addEventListener("input", function (e) {
      let val = e.target.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
      val = val.slice(0, 9).replace(/(.{3})(.{3})?(.*)?/, function (_, a, b, c) {
        return [a, b, c].filter(Boolean).join("-");
      });
      e.target.value = val;
    });
  };

  const waitForInput = setInterval(() => {
    const input = document.getElementById("extension_Code");
    if (input && !input.dataset.masked) {
      maskInput(input);
      input.dataset.masked = "true";
      clearInterval(waitForInput);
    }
  }, 300);
})();