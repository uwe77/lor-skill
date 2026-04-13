// verifier.js - Core verification logic
const fs = require('fs');
const path = require('path');

function verify(targetPath) {
    const allowedRoot = path.resolve('skills/lor');
    const fullPath = path.resolve(targetPath);
    if (!fullPath.startsWith(allowedRoot)) throw new Error("Security Violation!");
    return fs.existsSync(fullPath);
}
module.exports = { verify };
