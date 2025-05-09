// src/components/ProductEditor.jsx
import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editore = ({ value, onChange }) => {
  return (
    <div className="my-4 rounded-md ">
      <label className="block mb-2 text-sm font-medium text-gray-700">
        Content 
      </label>
      <div className="bg-gray-200 rounded-xl">
        <CKEditor
          editor={ClassicEditor}
          data={value}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            placeholder: "Write something awesome...",
            language: "en",
            toolbar:{
              shouldNotGroupWhenFull : true
            }
          }}
        />
      </div>
    </div>
  );
};

export default Editore;