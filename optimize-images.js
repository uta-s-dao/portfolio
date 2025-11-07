async function optimizeImage(
  inputPath,
  outputPath,
  quality = 80,
  maxWidth = 1920
) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Resize if larger than maxWidth
    let processor = image;
    if (metadata.width > maxWidth) {
      processor = processor.resize(maxWidth, null, {
        fit: "inside",
        withoutEnlargement: true,
      });
    }

    // Output as JPEG with quality compression
    const info = await processor
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);

    const inputSize = fs.statSync(inputPath).size;
    const outputSize = info.size;
    const reduction = (((inputSize - outputSize) / inputSize) * 100).toFixed(2);

    console.log(
      `✅ ${path.basename(inputPath)} -> ${path.basename(outputPath)}`
    );
    console.log(`   Original: ${metadata.width}x${metadata.height}`);
    console.log(
      `   ${(inputSize / 1024 / 1024).toFixed(2)}MB -> ${(
        outputSize /
        1024 /
        1024
      ).toFixed(2)}MB (${reduction}% reduction)\n`
    );
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function main() {
  const publicDir = path.join(__dirname, "public");

  console.log("🖼️  Starting image optimization...\n");

  // Optimize desk.jpg (1.4MB) - highest priority
  await optimizeImage(
    path.join(publicDir, "desk.jpg"),
    path.join(publicDir, "desk-optimized.jpg"),
    75,
    1920
  );

  // Optimize about.jpg (942KB)
  await optimizeImage(
    path.join(publicDir, "about.jpg"),
    path.join(publicDir, "about-optimized.jpg"),
    80,
    1920
  );

  // Optimize pexels-element5-1370295.jpg (882KB)
  await optimizeImage(
    path.join(publicDir, "pexels-element5-1370295.jpg"),
    path.join(publicDir, "pexels-element5-1370295-optimized.jpg"),
    80,
    1920
  );

  console.log("✨ Image optimization complete!");
}

main();
