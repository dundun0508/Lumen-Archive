// 语言选择器生成脚本
document.addEventListener('DOMContentLoaded', function() {
    const langSelector = `
        <div style="text-align: right; padding: 10px 20px; background-color: #f8f9fa; border-bottom: 1px solid #dee2e6; font-size: 0.9em;">
            <strong>🌐 Language:</strong>
            <a href="index_zh.html" style="margin: 0 5px;">中文</a> |
            <a href="index_en.html" style="margin: 0 5px;">English</a> |
            <a href="index_fr.html" style="margin: 0 5px;">Français</a>
        </div>
    `;
    // 将选择器插入到页面最顶部
    document.body.insertAdjacentHTML('afterbegin', langSelector);
});
