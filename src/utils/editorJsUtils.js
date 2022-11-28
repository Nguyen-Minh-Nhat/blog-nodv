const editorJsUtils = {
  convertToPost: (editorJsData) => {
    const { blocks } = editorJsData;
    const post = {
      title: "",
      content: "",
      subtitle: "",
      thumbnail: "",
      images: [],
    };
    blocks.forEach((block) => {
      switch (block.type) {
        case "header":
          if (!post.title) post.title = block.data.text;
          else if (!post.subtitle) post.subtitle = block.data.text;
          break;
        case "paragraph":
          if (!post.title) post.title = block.data.text;
          else if (!post.subtitle) post.subtitle = block.data.text;
          break;
        case "image":
          post.images.push(block.data.file.url);
          break;
        case "simpleImage":
          post.images.push(block.data.url);
          break;
        default:
          break;
      }
    });
    post.thumbnail = post?.images[0];
    console.log(post);
    return post;
  },
};

export default editorJsUtils;
export const { convertToPost } = editorJsUtils;
