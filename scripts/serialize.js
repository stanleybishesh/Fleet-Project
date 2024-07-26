export async function serialize(data) {
  let finalMappedData;
  if (Array.isArray(data)) {
    finalMappedData = data.map((datum) => {
      let mappedData = {};
      mappedData["postId"] = datum["id"];
      mappedData["userId"] = datum["userId"];
      mappedData["blogTitle"] = datum["title"];
      mappedData["blogDescription"] = datum["body"];
      return mappedData;
    });
  } else {
    finalMappedData = {
      userId: data.userId,
      blogTitle: data.title,
      blogDescription: data.body,
    };
  }
  return finalMappedData;
}
