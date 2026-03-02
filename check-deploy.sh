#!/bin/bash
# 快速检查 Vercel 部署状态

echo "🔍 检查 Vercel 部署..."
echo ""

echo "📋 仓库信息："
echo "  GitHub: https://github.com/emajjsky/baltan"
echo "  文件数: $(ls ~/baltan | grep -v '\.git' | wc -l)"
echo ""

echo "📝 最近提交："
cd ~/baltan
git log --oneline -3
echo ""

echo "🌐 Vercel 检查："
echo "  1. 访问: https://vercel.com/emajjsky/baltan"
echo "  2. 查看部署状态（可能显示 Building、Ready 或 Failed）"
echo "  3. 如果成功，点击 Visit 获取网址"
echo "  4. 如果失败，点击 Redeploy 重新部署"
echo ""

echo "💡 快速访问测试："
echo "  GitHub Pages: https://emajjsky.github.io/baltan/growth.html"
echo "  (这个应该可以访问，如果可以说明文件已上传成功)"
echo ""

echo "⏳ 如果 Vercel 显示 Building："
echo "  等待 1-2 分钟后刷新"
echo ""

echo "📊 可能的问题："
echo "  1. Vercel 还在构建中"
echo "  2. Vercel 项目配置错误"
echo "  3. 需要触发 Redeploy"
echo ""
