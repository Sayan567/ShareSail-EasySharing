import File from "../models/file.js";

export const uploadImage = async (request, response) => {
  // return response.status(200).json({msg: 'Hello'})
  const fileObj = {
    path: request.file.path,
    name: request.file.originalname,
  };

  try {
    const file = await File.create(fileObj);
    response
      .status(200)
      .json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` });
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ error: error.message });
  }
};

//${process.env.PORT}

export const downloadImage = async (request, response) => {
  try {
    const file = await File.findById(request.params.fileId);

    file.downloadCount++;

    await file.save();

    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    response.status(500).json({ msg: error.message });
  }
}
