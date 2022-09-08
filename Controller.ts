$(".generate-user").on("click", async function () {
  let init: Menger = await creatAll();
  Renderer(init);
});
