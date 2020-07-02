import NodeFile from "../../models/nodefile";

// POST /api/file
export const write = async (ctx) => {
  console.log(ctx.request.body);
  const file = ctx.request.body;
  const nodeFile = NodeFile(file);
  try {
    await nodeFile.save();
    ctx.body = nodeFile;
  } catch (e) {
    ctx.throw(500, e);
  }
};

// GET /api/file
export const read = async (ctx) => {
  const query = {
    title: ctx.query.title,
  }
  try {
    const files = await NodeFile.find(query).sort({ _id: -1 }).limit(10).exec();
    if (files.length > 0) {
      ctx.body = files[0];
    }
  } catch (e) {
    ctx.throw(500, e);
  }
};
