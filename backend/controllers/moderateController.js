// controllers/moderateController.js
const nsfw = require('nsfwjs');
const tf = require('@tensorflow/tfjs-node');
const fs = require('fs');
const path = require('path');

let model;

// Function to load the model (call this at app startup)
async function loadModel() {
  model = await nsfw.load();  // You can specify options like nsfw.load('file://model-path') if using a local model
  console.log('NSFW model loaded');
}

// Call loadModel when your app starts
loadModel();

exports.moderateImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    const image = fs.readFileSync(req.file.path);
    const tensor = tf.node.decodeImage(image, 3);

    if (!model) {
      return res.status(503).json({ error: 'Model not loaded yet' });
    }

    const predictions = await model.classify(tensor);
    tensor.dispose();

    fs.unlinkSync(req.file.path);

    return res.status(200).json({ predictions });
  } catch (error) {
    console.error('Moderation error:', error);
    return res.status(500).json({ error: 'Moderation failed' });
  }
};
