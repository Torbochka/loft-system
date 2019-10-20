const DATABASE = global.DATABASE;
const ENGINE = global.ENGINE;

ENGINE.on("profile", async res => {
  try {
    const user = await DATABASE.emit("db/userById", res.data.decoded.id);

    res.reply(user);
  } catch (err) {
    res.replyErr({ message: err.message });
  }
});

ENGINE.on("updateProfile", async res => {
  try {
    const {
      decoded: { id },
      request: { body }
    } = res.data;

    const user = await DATABASE.emit("db/updateProfile", { id, ...body });

    res.reply(user);
  } catch (err) {
    res.replyErr({ message: err.message });
  }
});
