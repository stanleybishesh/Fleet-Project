export async function serialize(data) {
  let d = await data;
  let finalMappedData;
  if (Array.isArray(d)) {
    finalMappedData = d.map((datum) => {
      let mappedData = {};
      mappedData["blogId"] = datum["id"];
      mappedData["albumId"] = datum["albumId"];
      mappedData["blogTitle"] = datum["title"];
      mappedData["imgURL"] = datum["url"];
      return mappedData;
    });
  } else {
    finalMappedData = {
      blogId: data.userId,
      albumId: data.albumId,
      blogTitle: data.title,
      imgURL: data.url,
    };
  }
  return finalMappedData;
}
