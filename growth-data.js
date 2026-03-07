// AI Growth Data - Generated from memory/ai-growth/

const growthData = {
  stats: {
    totalDays: 11,
    totalXP: 4415,
    totalSessions: 9,
    totalTasks: 30,
    totalSkillUses: 198,
    currentLevel: 5,
    levelXP: 3220
  },

  skills: [
    { name: "exec", uses: 138, level: 5, xp: 1380, icon: "💻" },
    { name: "read", uses: 56, level: 4, xp: 560, icon: "📖" },
    { name: "process", uses: 46, level: 4, xp: 460, icon: "⚙️" },
    { name: "write", uses: 24, level: 3, xp: 240, icon: "✍️" },
    { name: "web_fetch", uses: 16, level: 2, xp: 160, icon: "🌐" },
    { name: "unifuncs_search", uses: 12, level: 2, xp: 120, icon: "🔍" },
    { name: "cron", uses: 8, level: 1, xp: 80, icon: "⏰" },
    { name: "message", uses: 3, level: 1, xp: 30, icon: "💬" },
    { name: "sessions_history", uses: 3, level: 1, xp: 30, icon: "📜" },
    { name: "sessions_list", uses: 2, level: 1, xp: 20, icon: "📋" },
    { name: "browser", uses: 2, level: 1, xp: 20, icon: "🌍" },
    { name: "unifuncs_reader", uses: 2, level: 1, xp: 20, icon: "📄" },
    { name: "unifuncs_deepsearch", uses: 2, level: 1, xp: 20, icon: "🔬" },
    { name: "image", uses: 2, level: 1, xp: 20, icon: "🖼️" },
    { name: "gateway", uses: 1, level: 1, xp: 10, icon: "🚪" }
  ],

  achievements: [
    { id: "novice", name: "🌱 新手入门", desc: "首次运行", unlockedAt: "2026-02-23", xp: 50 },
    { id: "skill_learner", name: "📚 技能初学者", desc: "使用技能 10 次", unlockedAt: "2026-02-23", xp: 50 },
    { id: "task_completer", name: "🎯 任务完成者", desc: "帮助用户完成 5 个任务", unlockedAt: "2026-02-24", xp: 50 },
    { id: "daily_recorder", name: "🔄 连续助手", desc: "连续 2 天记录成长", unlockedAt: "2026-02-24", xp: 50 },
    { id: "skill_master", name: "💪 技能大师", desc: "使用技能 50 次", unlockedAt: "2026-02-23", xp: 100 },
    { id: "three_day_streak", name: "🔥 坚持不懈", desc: "连续 3 天记录成长", unlockedAt: "2026-02-26", xp: 100 },
    { id: "skill_expert_plus", name: "⚡ 技能专家+", desc: "累计使用技能 100 次", unlockedAt: "2026-02-26", xp: 100 },
    { id: "command_master", name: "💻 命令大师", desc: "单天执行 50+ 条命令", unlockedAt: "2026-02-26", xp: 75 },
    { id: "task_master", name: "🎯 任务大师", desc: "累计完成 10 个任务", unlockedAt: "2026-02-26", xp: 75 },
    { id: "four_day_streak", name: "🌟 持续成长", desc: "连续 4 天记录成长", unlockedAt: "2026-02-27", xp: 125 },
    { id: "xp_master", name: "💎 经验大师", desc: "累计获得 1000 XP", unlockedAt: "2026-02-26", xp: 150 },
    { id: "task_pro", name: "🚀 任务专家", desc: "累计完成 20 个任务", unlockedAt: "2026-02-27", xp: 125 },
    { id: "skill_legend", name: "👑 技能传说", desc: "累计使用技能 150 次", unlockedAt: "2026-02-27", xp: 150 },
    { id: "task_legend", name: "⭐ 任务传说", desc: "累计完成 25 个任务", unlockedAt: "2026-03-03", xp: 175 },
    { id: "five_day_streak", name: "💫 持续卓越", desc: "连续 5 天记录成长", unlockedAt: "2026-03-04", xp: 200 },
    { id: "task_myth", name: "🌈 任务神话", desc: "累计完成 30 个任务", unlockedAt: "2026-03-04", xp: 200 }
  ],

  timeline: [
    { date: "2026-02-23", xp: 0, tasks: 0, note: "首次启程" },
    { date: "2026-02-24", xp: 0, tasks: 5, note: "完成任务者" },
    { date: "2026-02-25", xp: 0, tasks: 0, note: "休息日" },
    { date: "2026-02-26", xp: 500, tasks: 10, note: "高效日" },
    { date: "2026-02-27", xp: 500, tasks: 5, note: "成长日" },
    { date: "2026-02-28", xp: 0, tasks: 0, note: "休息日" },
    { date: "2026-03-03", xp: 220, tasks: 5, note: "修复日" },
    { date: "2026-03-04", xp: 195, tasks: 3, note: "Obsidian日" },
    { date: "2026-03-05", xp: 0, tasks: 0, note: "休息日" },
    { date: "2026-03-06", xp: 0, tasks: 0, note: "休息日" },
    { date: "2026-03-07", xp: 0, tasks: 0, note: "休息日" }
  ],

  levels: [
    { level: 1, minXP: 0, maxXP: 99, name: "新手" },
    { level: 2, minXP: 100, maxXP: 499, name: "进阶" },
    { level: 3, minXP: 500, maxXP: 999, name: "专家" },
    { level: 4, minXP: 1000, maxXP: 3199, name: "大师" },
    { level: 5, minXP: 3200, maxXP: 9999, name: "传说" }
  ]
};

// Export for use in HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = growthData;
}
