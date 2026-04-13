
const fs = require('fs');
const path = require('path');

function verify(targetPath) {
    // 嚴格限制只能在 skills/lor 目錄下
    const allowedRoot = path.resolve('skills/lor');
    const fullPath = path.resolve(targetPath);

    if (!fullPath.startsWith(allowedRoot)) {
        throw new Error("Security Violation: Access denied outside lor/!");
    }

    if (fs.existsSync(fullPath)) {
        console.log(`✅ Verified: ${targetPath} exists.`);
        return true;
    } else {
        console.log(`❌ Error: ${targetPath} not found.`);
        return false;
    }
}

// Export for test
module.exports = { verify };
