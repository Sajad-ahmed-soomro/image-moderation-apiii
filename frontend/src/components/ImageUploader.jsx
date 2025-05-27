function ImageUploader({ onUpload }) {
    return (
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    );
  }
  
  export default ImageUploader;
  