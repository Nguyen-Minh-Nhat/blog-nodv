import Image from "@editorjs/image";
import { useCallback, useMemo, useRef } from "react";
import { createReactEditorJS } from "react-editor-js";
import { deleteImg, uploadImg } from "../../utils/firebaseFns";
import readingTime from "../../utils/readingTime";
import EDITOR_JS_TOOLS from "./tool";
const Editor = ({
  onChange,
  defaultValue = {
    blocks: [
      {
        id: "sheNwCUP5A",
        type: "header",
        data: {
          level: 1,
        },
      },
    ],
  },
  readOnly,
}) => {
  const editorCore = useRef(null);
  const prevImage = useRef([]);

  const tools = useMemo(() => {
    return {
      ...EDITOR_JS_TOOLS,
      image: {
        class: Image,
        config: {
          uploader: {
            uploadByFile: async (file) => {
              const url = await uploadImg(file);
              prevImage.current.push(url);
              return {
                success: 1,
                file: {
                  url,
                },
              };
            },
          },
        },
      },
    };
  }, []);

  const handleInitialize = useCallback((instance) => {
    editorCore.current = instance;
  }, []);
  const handleSave = useCallback(async () => {
    const savedData = await editorCore.current.save();
    return savedData;
  }, []);

  const handleChange = async (e) => {
    const currentImages = [];
    document
      .querySelectorAll(".image-tool__image-picture")
      .forEach((x) => currentImages.push(x.src));
    if (prevImage.current.length > currentImages.length) {
      prevImage.current.forEach(async (img) => {
        if (!currentImages.includes(img)) {
          deleteImg(img);
        }
      });
    }
    prevImage.current = currentImages;
    const data = await handleSave();

    onChange(data, readingTime());
  };

  const ReactEditorJS = createReactEditorJS();
  return (
    <div id="article" className="prose mx-10 max-w-none">
      <ReactEditorJS
        readOnly={readOnly}
        tools={tools}
        onInitialize={handleInitialize}
        // autofocus
        defaultValue={defaultValue}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default Editor;
