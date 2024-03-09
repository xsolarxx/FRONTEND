import './Uploadfile.css';
import { useEffect } from 'react';

export const Uploadfile = () => {
  const ekUpload = () => {
    const Init = () => {
      var fileSelect = document.getElementById('file-upload');
      fileSelect.addEventListener('change', fileSelectHandler, false);
    };

    const fileDragHover = (e) => {
      let fileDrag = document.getElementById('file-drag');

      e.stopPropagation();
      e.preventDefault();

      fileDrag.className = e.type === 'dragover' ? 'hover' : 'modal-body file-upload';
    };

    const fileSelectHandler = (e) => {
      // Fetch FileList object
      let files = e.target.files || e.dataTransfer.files;

      // Cancel event and hover styling
      fileDragHover(e);

      // Process all File objects
      for (let i = 0, f; (f = files[i]); i++) {
        parseFile(f);
      }
    };

    // Output
    const output = (msg) => {
      // Response
      let m = document.getElementById('messages');
      m.innerHTML = msg;
    };

    function parseFile(file) {
      output('<strong>' + encodeURI(file.name) + '</strong>');
      let imageName = file.name;

      let isGood = /\.(?=gif|jpg|png|jpeg|webp)/gi.test(imageName);
      if (isGood) {
        document.getElementById('start').classList.add('hidden');
        document.getElementById('response').classList.remove('hidden');
        document.getElementById('notimage').classList.add('hidden');
        // Thumbnail Preview
        document.getElementById('file-image').classList.remove('hidden');
        document.getElementById('file-image').src = URL.createObjectURL(file);
      } else {
        document.getElementById('file-image').classList.add('hidden');
        document.getElementById('notimage').classList.remove('hidden');
        document.getElementById('start').classList.remove('hidden');
        document.getElementById('response').classList.add('hidden');
        document.getElementById('file-upload-form').reset();
      }
    }
    if (window.File && window.FileList && window.FileReader) {
      Init();
    } else {
      document.getElementById('file-drag').style.display = 'none';
    }
  };

  useEffect(() => {
    ekUpload();
  });

  return (
    <div id="file-upload-form" className="uploader">
      <input id="file-upload" type="file" name="image" accept="image/*" />

      <label htmlFor="file-upload" id="file-drag">
        <img id="file-image" src="#" alt="Preview" className="hidden" />
        <div id="start">
          <i className="fa fa-download" aria-hidden="true"></i>
          <div className="divSelect">Select a file or drag here</div>
          <div id="notimage" className="hidden">
            Please select an image
          </div>
          <span id="file-upload-btn" className="btn btn-primary">
            Select a file
          </span>
        </div>
        <div id="response" className="hidden">
          <div id="messages"></div>
        </div>
      </label>
    </div>
  );
};
