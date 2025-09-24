function numOfFiles(fileSize, fileUnit, driveSize) {
  let files;
  switch (fileUnit) {
    case "B":
      files = (driveSize * 1000 * 1000 * 1000) / fileSize;
      break;
    case "KB":
      files = (driveSize * 1000 * 1000) / fileSize;
      break;
    case "MB":
      files = (driveSize * 1000) / fileSize;
      break;

    default:
      console.log("INVALID FILE UNIT");
      break;
  }
  console.log(`Number of files can be stored: `, files);
}

numOfFiles(500, "B", 1);
