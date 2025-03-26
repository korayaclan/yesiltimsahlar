const fs = require('fs');
const path = require('path');

function saveProject() {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = path.join(__dirname, 'backups', timestamp);

  // Create backups directory if it doesn't exist
  fs.mkdirSync(path.join(__dirname, 'backups'), { recursive: true });
  fs.mkdirSync(backupDir, { recursive: true });

  // Copy src directory
  fs.cpSync(path.join(__dirname, 'src'), path.join(backupDir, 'src'), { recursive: true });

  // Copy configuration files
  const configFiles = [
    'package.json',
    'vite.config.ts',
    'tsconfig.json',
    'tailwind.config.js',
    'index.html'
  ];

  configFiles.forEach(file => {
    if (fs.existsSync(path.join(__dirname, file))) {
      fs.copyFileSync(
        path.join(__dirname, file),
        path.join(backupDir, file)
      );
    }
  });

  console.log(`Project saved to: ${backupDir}`);
}

saveProject();