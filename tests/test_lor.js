
const { verify } = require('../engine/verifier');

console.log("--- Running LoR System Test ---");

try {
    // 測試存取
    const status = verify('skills/lor/SKILL.md');
    
    // 模擬驗證失敗情況
    const failStatus = verify('skills/lor/non_existent.js');

    if (status && !failStatus) {
        console.log("✅ LoR System logic passed!");
    } else {
        process.exit(1);
    }
} catch (e) {
    console.error("❌ Test Failed:", e.message);
    process.exit(1);
}
