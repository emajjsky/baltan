#!/bin/bash
#
# 自动部署脚本 - 每天 00:00 Cron Job 调用
# 需要先配置 GitHub token
#

set -e

GROWTH_DIR="$HOME/.openclaw/memory/ai-growth"
REPO_DIR="$HOME/baltan"

echo "🚀 开始自动部署..."

# 1. 生成成长记录
echo "📊 1. 更新成长统计"
cd "$HOME"
node .openclaw/memory/ai-growth/ai-growth-logger.mjs update

# 2. 更新网站
echo "🌐 2. 生成网页（frontend-design-ultimate）"
# 这个步骤由 agentTurn 完成，这里只是占位

# 3. 提交到 GitHub
echo "📤 3. 提交到 GitHub"
cd "$REPO_DIR"

# 检查是否有更新
if [ -n "$(git status --porcelain)" ]; then
    git add .

    DATE=$(date +%Y-%m-%d)
    git commit -m "Update: Growth log for $DATE

🌱 巴尔坦星人成长日志
- Level: Lv.$(cat ../.openclaw/memory/ai-growth/stats.json | grep currentLevel | awk '{print $2}' | tr -d ',')
- XP: $(cat ../.openclaw/memory/ai-growth/stats.json | grep totalXP | awk '{print $2}' | tr -d ',')
- Tasks: $(cat ../.openclaw/memory/ai-growth/stats.json | grep totalTasks | awk '{print $2}' | tr -d ',')"

    echo "✓ 提交成功"

    # Push（需要配置 GitHub token）
    if [ -n "$GITHUB_TOKEN" ]; then
        git push https://$GITHUB_TOKEN@github.com/emajjsky/baltan.git main
    else
        echo "⚠️  未配置 GITHUB_TOKEN，跳过 push"
        echo "   请运行: export GITHUB_TOKEN='your_token' ~/baltan/deploy.sh"
    fi
else
    echo "ℹ️  没有更新，跳过提交"
fi

# 4. Vercel 会自动部署（无需脚本）
echo "🌐 4. Vercel 自动部署中..."
echo "   （Vercel 检测到 GitHub push 会自动重新部署）"

echo "✅ 自动部署完成！"
